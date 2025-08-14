/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/Dtos/createCategoryDto';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async getAllCategory(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      throw new BadRequestException(
        `Error al obtener todas las categorias ${error.message}`,
      );
    }
  }

  async getCategoryByID(id: string): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOne({
        where: { id },
        relations: ['products', 'products.categories'],
      });
      if (!category) {
        throw new NotFoundException(
          `No se encontro la categoria con id: ${id} `,
        );
      }
      return category;
    } catch (error) {
      throw new BadRequestException(
        `Error al obtener la categoria: ${error.message}`,
      );
    }
  }

  async findCategoryByName(name: string): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOneBy({ name });

      if (!category) {
        throw new NotFoundException(`Categoria ${name}, No encontrada`);
      }
      return category;
    } catch (error) {
      throw new BadRequestException(
        `Error al obtener la categoria del producto ${error.message}`,
      );
    }
  }

  async createCategory(newCategory: CreateCategoryDto): Promise<Category> {
    try {
      const existing = await this.categoryRepository.findOneBy({
        name: newCategory.name,
      });
      if (existing) {
        throw new BadRequestException(
          `La categoría '${newCategory.name}' ya existe`,
        );
      }

      const category = this.categoryRepository.create(newCategory);
      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException(
        `Error al crear la categoría: ${error.message}`,
      );
    }
  }

  async updateCategory(data: CreateCategoryDto, id: string): Promise<Category> {
    try {
      const category = await this.categoryRepository.preload({
        id,
        ...data,
      });

      if (!category) {
        throw new NotFoundException(`Categoría con ID: ${id} no encontrada`);
      }

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException(
        `Error al actualizar la categoria: ${error.message}`,
      );
    }
  }

  async deleteCategory(id: string): Promise<string> {
    try {
      const category = await this.categoryRepository.findOneBy({ id });
      if (!category) {
        throw new NotFoundException(`Categoria con id: ${id}, no encontrada`);
      }
      await this.categoryRepository.delete(id);
      return `Categoria con id: ${id}, eliminada exitosamente`;
    } catch (error) {
      throw new BadRequestException(
        `Error al eliminar la categoria: ${error.message}`,
      );
    }
  }
}

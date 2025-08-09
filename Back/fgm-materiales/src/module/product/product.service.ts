/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createProductDto, updateProductDto } from 'src/Dtos/createProductDto';
import { Product } from 'src/entities/product.entity';
import { Category } from 'src/entities/category.entity';
import { ILike, In, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async getProductByid(id: string): Promise<Product> {
    try {
      const product = await this.productRepository.findOne({
        where: { id },
        relations: ['categories'],
      });
      if (!product) {
        throw new NotFoundException(`Producto con id:${id}, no encontrado `);
      }
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener los productos: ${error.message}`,
      );
    }
  }

  async getAllproducts(): Promise<Product[]> {
    try {
      const products = await this.productRepository.find({
        relations: ['categories'],
      });
      return products;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener los productos: ${error.message}`,
      );
    }
  }

  async createProduct(productDto: createProductDto): Promise<Product> {
    try {
      const { categoryIds, ...productData } = productDto;

      const existing = await this.productRepository.findOneBy({
        name: productData.name,
      });
      if (existing) {
        throw new BadRequestException(
          `El producto '${productData.name}' ya existe`,
        );
      }

      const product = this.productRepository.create(productData);

      if (categoryIds && categoryIds.length > 0) {
        const categories = await this.categoryRepository.findBy({
          name: In(categoryIds),
        });
        product.categories = categories;
      }

      return await this.productRepository.save(product);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al crear el producto: ${error.message}`,
      );
    }
  }

  async updateProduct(
    id: string,
    productDto: updateProductDto,
  ): Promise<Product> {
    try {
      const { categoryIds, ...productData } = productDto;

      const productToUpdate = await this.productRepository.preload({
        id,
        ...productData,
      });

      if (!productToUpdate) {
        throw new NotFoundException(`Producto con ID: ${id}, no encontrado`);
      }

      if (categoryIds && categoryIds.length > 0) {
        const categories = await this.categoryRepository.findBy({
          id: In(categoryIds),
        });
        productToUpdate.categories = categories;
      }

      await this.productRepository.save(productToUpdate);
      const updatedProduct = await this.productRepository.findOne({
        where: { id },
        relations: ['categories'],
      });

      if (!updatedProduct) {
        throw new NotFoundException(
          `Producto con id:${id} no encontrado después de la actualización`,
        );
      }

      return updatedProduct;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al actualizar el producto: ${error.message}`,
      );
    }
  }

  async deleteProduct(id: string): Promise<string> {
    try {
      const product = await this.productRepository.findOneBy({ id });
      if (!product) {
        throw new NotFoundException(`Producto con id: ${id}, no encontrado`);
      }

      await this.productRepository.delete(id);
      return `Producto con id: ${id}, eliminado exitosamente`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al eliminar el productos: ${error.message}`,
      );
    }
  }

  async createMultipleProducts(
    productsDto: createProductDto[],
  ): Promise<Product[]> {
    const createdProducts: Product[] = [];

    for (const productDto of productsDto) {
      const product = await this.createProduct(productDto);
      createdProducts.push(product);
    }

    return createdProducts;
  }

  async searchProducts(search: string) {
    if (!search) return [];
    return this.productRepository.find({
      where: [
        { name: ILike(`%${search}%`) },
        { description: ILike(`%${search}%`) },
        // Si tienes relación con categoría, puedes agregarla aquí
      ],
      relations: ['categories'], // si tienes relación con categorías
      take: 20, // límite opcional
    });
  }
}

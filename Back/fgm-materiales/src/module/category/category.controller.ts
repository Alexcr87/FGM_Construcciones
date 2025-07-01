import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto } from 'src/Dtos/createCategoryDto';

@ApiTags('Category')
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @HttpCode(200)
  getAllCategory(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }

  @Get(':id')
  @HttpCode(200)
  getCategoryByID(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
    return this.categoryService.getCategoryByID(id);
  }

  @Post()
  @HttpCode(201)
  createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(category);
  }

  @Put(':id')
  @HttpCode(201)
  updateCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() category: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.updateCategory(category, id);
  }

  @Delete(':id')
  @HttpCode(200)
  deleteCategory(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    return this.categoryService.deleteCategory(id);
  }
}

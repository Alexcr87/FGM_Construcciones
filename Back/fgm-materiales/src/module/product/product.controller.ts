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
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { createProductDto, updateProductDto } from 'src/Dtos/createProductDto';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(200)
  getAllproducts() {
    return this.productService.getAllproducts();
  }

  @Get(':id')
  @HttpCode(200)
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.getProductByid(id);
  }

  @Post('')
  @HttpCode(201)
  createProduct(@Body() product: createProductDto) {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  @HttpCode(200)
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: updateProductDto,
  ) {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  @HttpCode(200)
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.deleteProduct(id);
  }

  @Post('muchos')
  @HttpCode(201)
  createMultipleProduct(@Body() product: createProductDto[]) {
    return this.productService.createMultipleProducts(product);
  }
}

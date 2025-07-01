import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    description: 'El nombre del producto debe contener entre 3 y 50 carateres ',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(500)
  @ApiProperty({
    description:
      'La descripcion del producto debe contener entre 3 y 500 carateres ',
  })
  description: string;

  @IsString()
  @ApiProperty()
  img: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  @ApiProperty()
  categoryIds: string[];
}

export class updateProductDto extends PartialType(createProductDto) {}

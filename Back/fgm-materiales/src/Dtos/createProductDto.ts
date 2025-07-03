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

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    description: 'dimenciones en centimetros del producto ',
  })
  dimencion: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'superficie del producto, por ejemplo: pared, piso, etc',
  })
  surface?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description:
      'cantidad de metros cuadrados que cubre el producto, por ejemplo: 2.02m2',
  })
  box?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    description:
      'tipo de material del producto, por ejemplo: pulido, brillante, etc',
  })
  material: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  @ApiProperty()
  categoryIds: string[];
}

export class updateProductDto extends PartialType(createProductDto) {}

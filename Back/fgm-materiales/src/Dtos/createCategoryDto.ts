import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(250)
  @ApiProperty()
  description: string;
}

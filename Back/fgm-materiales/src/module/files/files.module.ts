import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Pdf } from 'src/entities/pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Pdf])],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}

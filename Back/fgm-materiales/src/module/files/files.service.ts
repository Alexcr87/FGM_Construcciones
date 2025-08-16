/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  UploadApiOptions,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';
import { Pdf } from 'src/entities/pdf.entity';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Pdf)
    private readonly pdfRepository: Repository<Pdf>,
  ) { }

  async uploadFile(file: Express.Multer.File, id: string) {
    try {
      const url = await this.uploadFileToCloudinary(file.buffer, id);
      // Obtener el producto actual para no sobrescribir imágenes existentes
      const product = await this.productRepository.findOneBy({ id });
      if (!product) {
        throw new InternalServerErrorException('Producto no encontrado');
      }
      const images = Array.isArray(product.images) ? [...product.images, url] : [url];
      await this.productRepository.update(id, { images });
      return { imgUrl: url };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al cargar el archivo: ${error.message}`,
      );
    }
  }

  async uploadFileToCloudinary(buffer: Buffer, uuid?: string): Promise<string> {
    const options: UploadApiOptions = {
      folder: 'upload', // esto es donde se sube, si no existe la carpeta, la crea
      public_id: uuid, // estaa es la referencia lo ideal es un uuid
      resource_type: 'auto', // que tipo de archivos es, Auto para que lo dedusca
    };
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        options,
        (error: unknown, result?: UploadApiResponse) => {
          if (error || !result?.secure_url) {
            return reject(new Error('Error al subir archivo'));
          }
          resolve(result.secure_url);
        },
      );
      stream.write(buffer);
      stream.end();
    });
  }

  async savePdf(name: string, url: string) {
    const pdf = this.pdfRepository.create({ name, url });
    return await this.pdfRepository.save(pdf);
  }

  async getAll() {
    return this.pdfRepository.find();
  }
}

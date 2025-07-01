import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  /*constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async uploadFile(file: Express.Multer.File, id: string) {
    try {
      const url = await this.uploadFileToCloudinary(file.buffer, id);
      await this.productRepository.update(id, { img_url: url });
      return { imgUrl: url };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al cargar el archivo: ${error.message}`,
      );
    }
  }

  async uploadFileToCloudinary(buffer: Buffer, id?: string): Promise<string> {
    const options: UploadApiOptions = {
      folder: 'upload', // esto es donde se sube, si no existe la carpeta, la crea
      public_id: id, // estaa es la referencia lo ideal es un uuid
      resource_type: 'auto', // que tipo de archivos es, Auto para que lo dedusca
    };
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          error ? reject(error) : resolve(result.secure_url);
        },
      );
      stream.write(buffer);
      stream.end();
    });
  }*/
}

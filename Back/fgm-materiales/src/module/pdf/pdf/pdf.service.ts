import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pdf } from 'src/entities/pdf.entity';
import { Repository } from 'typeorm';



@Injectable()
export class PdfService {

  constructor(
    @InjectRepository(Pdf)
    private readonly pdfRepository: Repository<Pdf>,
  ) { }

  async findAll() {
    try {
      return await this.pdfRepository.find();
    } catch (error) {
      throw new BadRequestException(
        `Error al obtener todos los pdfs ${error.message}`,
      );
    }
  }

  async findOne(id: string): Promise<Pdf> {
    try {
      const pdf = await this.pdfRepository.findOne({
        where: { id }
      });
      if (!pdf) {
        throw new NotFoundException(
          `No se encontro el pdf con id: ${id} `,
        );
      }
      return pdf;
    } catch (error) {
      throw new BadRequestException(
        `Error al obtener el pdf: ${error.message}`,
      );
    }
  }
}

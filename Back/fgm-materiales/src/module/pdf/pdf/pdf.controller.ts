import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { PdfService } from './pdf.service';


@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) { }

  @Get()
  getAll() {
    return this.pdfService.findAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return this.pdfService.findOne(+id);
  }
}

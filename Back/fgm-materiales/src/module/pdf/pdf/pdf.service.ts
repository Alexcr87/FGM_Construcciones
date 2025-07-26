import { Injectable } from '@nestjs/common';



@Injectable()
export class PdfService {


  findAll() {
    return `This action returns all pdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdf`;
  }
}

import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { FileUploadDto } from 'src/Dtos/fileUploadDto';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Files')
@ApiBearerAuth()
@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) { }

  @ApiBearerAuth()
  @Post('/image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File upload',
    type: FileUploadDto,
  })
  async uploadFile(
    @Req() request: Request & { user: any },
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 20000000, // 20Mb
            message: 'El archivo es demasiado grande; debe ser menor a 20Mb',
          }),
          new FileTypeValidator({
            fileType: /(jpg|jpeg|png|webp)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const url = await this.fileService.uploadFile(file, id);
    return { imgUrl: url };
  }

  @Post('/pdf')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'PDF upload',
    type: FileUploadDto, // podés hacer uno nuevo específico si querés
  })
  async uploadPdf(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 10 * 1024 * 1024, // 10 MB
            message: 'El archivo es demasiado grande; debe ser menor a 10MB',
          }),
          new FileTypeValidator({
            fileType: 'application/pdf',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const uuid = uuidv4();
    const url = await this.fileService.uploadFileToCloudinary(
      file.buffer,
      uuid,
    );
    return { fileUrl: url, id: uuid };
  }
}

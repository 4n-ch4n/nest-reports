import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get('employment-letter')
  employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello world test';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter/:id')
  async employmetLetterById(
    @Res() response: Response,
    @Param('id') id: string,
  ) {
    const pdfDoc = await this.basicReportsService.employmentLetterById(+id);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello world test';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}

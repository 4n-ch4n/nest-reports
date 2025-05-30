import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';
import { $Enums } from '@prisma/client';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get('employment-letter')
  employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employment-Certificate';
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
    pdfDoc.info.Title = 'Employment-Certificate';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('countries')
  async getCountriesReport(
    @Res() response: Response,
    @Query('continent') continent: string,
  ) {
    const pdfDoc = await this.basicReportsService.getCountries(
      $Enums.continents[continent] as $Enums.continents,
    );

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Countries-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}

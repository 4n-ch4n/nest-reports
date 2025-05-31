import { Response } from 'express';
import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('order/:orderId')
  async getOrderReport(
    @Res() response: Response,
    @Param('orderId', ParseIntPipe) orderId: number,
  ) {
    const pdfDoc =
      await this.storeReportsService.getOrderReportByOrderId(orderId);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Receipt';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}

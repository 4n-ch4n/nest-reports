import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetter, getEmploymentLetterById } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetter();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: {
        id: employeeId,
      },
    });
    if (!employee)
      throw new NotFoundException(`Employee with id ${employeeId} not found`);

    const docDefinition = getEmploymentLetterById({
      employerName: 'Anthony Londoño',
      employerPosition: 'Software Engineer',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: `Anthony's software`,
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}

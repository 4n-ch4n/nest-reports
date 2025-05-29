import { DateFormatter } from 'src/helpers';
import { headerSection } from './sections/header.section';
import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportValues {
  employerName: string;
  employerPosition: string;
  employeeName: string;
  employeePosition: string;
  employeeStartDate: Date;
  employeeHours: number;
  employeeWorkSchedule: string;
  employerCompany: string;
}

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
  },
  body: {
    margin: [0, 0, 0, 70],
    alignment: 'justify',
  },
  signature: {
    fontSize: 14,
    bold: true,
  },
  footer: {
    fontSize: 10,
    italics: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
};

export const getEmploymentLetterById = (
  values: ReportValues,
): TDocumentDefinitions => {
  const {
    employerName,
    employerPosition,
    employeeName,
    employeePosition,
    employeeStartDate,
    employeeHours,
    employeeWorkSchedule,
    employerCompany,
  } = values;

  const docDefinition: TDocumentDefinitions = {
    styles,
    pageMargins: [40, 60, 40, 60],
    header: headerSection({}),
    content: [
      {
        text: 'EMPLOYMENT CERTIFICATE',
        style: 'header',
      },
      {
        text: `I, ${employerName}, in my capacity as ${employerPosition} at ${employerCompany}, hereby certify that ${employeeName} has been employed at our company since ${DateFormatter.getMMDDYYYY(employeeStartDate)}. \n\n
        During their employment, Mr./Ms. ${employeeName} has held the position of ${employeePosition}, demonstrating responsibility, commitment, and professional skills in their duties. \n\n
        Mr./Ms. ${employeeName} works ${employeeHours} hours per week, with a schedule of ${employeeWorkSchedule}, in compliance with the company’s established policies and procedures. \n\n
        This certificate is issued at the request of the interested party for whatever purposes they may deem appropriate. \n\n`,
        style: 'body',
      },
      {
        text: `Sincerely,
        ${employerName}
        ${employerPosition}
        ${employerCompany}
        ${DateFormatter.getMMDDYYYY(new Date())}`,
        style: 'signature',
      },
    ],
    footer: {
      text: 'This document is an employment certificate and does not represent a labor commitment.',
      style: 'footer',
    },
  };

  return docDefinition;
};

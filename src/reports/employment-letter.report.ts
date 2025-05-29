import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

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

export const getEmploymentLetter = (): TDocumentDefinitions => {
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
        text: `I, [Employer's Name], in my capacity as [Employer's Position] at [Company Name], hereby certify that [Employee's Name] has been employed at our company since [Employee's Start Date]. \n\n
        During their employment, Mr./Ms. [Employee's Name] has held the position of [Employee's Position], demonstrating responsibility, commitment, and professional skills in their duties. \n\n
        Mr./Ms. [Employee's Name] works [Number of Hours] hours per week, with a schedule of [Work Schedule], in compliance with the company’s established policies and procedures. \n\n
        This certificate is issued at the request of the interested party for whatever purposes they may deem appropriate. \n\n`,
        style: 'body',
      },
      {
        text: `Sincerely,
        [Employer's Name]
        [Employer's Position]
        [Company Name]
        [Date]`,
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

import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { countries as Country } from '@prisma/client';
import { footerSection } from './sections/footer.section';

interface ReportOptions {
  title?: string;
  subTitle?: string;
  countries: Country[];
}

export const getCountryReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { title, subTitle, countries } = options;

  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: title ?? 'Countries Report',
      subTitle: subTitle ?? 'List of countries',
    }),
    footer: footerSection,
    pageMargins: [40, 110, 40, 60],
    content: [
      {
        layout: 'customLayout', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [50, 50, 50, '*', 'auto', '*'],

          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continet', 'Local Name'],
            ...countries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3 || '',
              { text: country.name || '', bold: true },
              country.continent || '',
              country.local_name || '',
            ]),
          ],
        },
      },
      {
        text: 'Total',
        style: {
          fontSize: 18,
          bold: true,
          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Total countries',
                colSpan: 2,
                bold: true,
              },
              {},
              {
                text: countries.length.toString(),
                bold: true,
              },
            ],
          ],
        },
      },
    ],
  };
};

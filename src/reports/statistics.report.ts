import { generateDonutChart } from './charts/donut.chart';
import { headerSection } from './sections/header.section';
import { generateLineChart } from './charts/line.chart';
import { generateBarChart } from './charts/bar.chart';
import { footerSection } from './sections/footer.section';
import { generateSteppedChart } from './charts/stepped.chart';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subTitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const [donutChart, lineChart, barChart, steppedChart] = await Promise.all([
    generateDonutChart({
      entries: options.topCountries.map((country) => ({
        label: country.country,
        value: country.customers,
      })),
      position: 'left',
    }),
    generateLineChart(),
    generateBarChart(),
    generateSteppedChart(),
  ]);

  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 100, 40, 60],
    header: headerSection({
      title: options.title ?? 'Clients Statistics',
      subTitle: options.subTitle ?? 'Top 10 countries with more clients',
    }),
    footer: footerSection,
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: 'Top countries with more clients',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 320,
              },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['Country', 'Clients'],
                ...options.topCountries.map((country) => [
                  country.country,
                  country.customers,
                ]),
              ],
            },
          },
        ],
      },
      {
        image: lineChart,
        width: 500,
        margin: [0, 20],
      },
      {
        columnGap: 10,
        columns: [
          {
            image: barChart,
            width: 250,
          },
          {
            image: steppedChart,
            width: 250,
          },
        ],
      },
    ],
  };

  return docDefinition;
};

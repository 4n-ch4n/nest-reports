import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { CurrencyFormatter, DateFormatter } from 'src/helpers';
import { footerSection } from './sections/footer.section';
import { CompleteOrder } from './interfaces/order.interface';

interface ReportValues {
  title?: string;
  subTitle?: string;
  data: CompleteOrder;
}

const logo: Content = {
  image: 'src/assets/logo.png',
  width: 100,
  height: 80,
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 20,
    bold: true,
    margin: [0, 30, 0, 0],
  },
  subHeader: {
    fontSize: 16,
    bold: true,
    margin: [0, 20, 0, 0],
  },
};

export const orderByIdReport = (value: ReportValues): TDocumentDefinitions => {
  const { data } = value;
  const { customers, order_details } = data;

  const subTotal = order_details.reduce(
    (acc, curr) => acc + curr.quantity * curr.products.price,
    0,
  );

  return {
    styles,
    header: logo,
    pageMargins: [40, 80, 40, 60],
    footer: footerSection,
    content: [
      {
        text: `Anthony's code`,
        style: 'header',
      },
      {
        columns: [
          {
            text: '15 Random Str, Suite 100, \nNew York ON Y2K 811, EEUU\nBN: 12345678\nhttps://github.com/4n-ch4n',
          },
          {
            text: [
              {
                text: `Receipt No. ${data.order_id}\n`,
                bold: true,
              },
              `Date of the receipt ${DateFormatter.getMMDDYYYY(data.order_date)}\nPay before ${DateFormatter.getMMDDYYYY(new Date())}\n`,
            ],
            alignment: 'right',
          },
        ],
      },
      { qr: 'https://github.com/4n-ch4n', fit: 75, alignment: 'right' },
      {
        text: [
          {
            text: 'Bill to: \n',
            style: 'subHeader',
          },
          `
          Company Name: ${customers.customer_name},
          Contact: ${customers.contact_name}
          `,
        ],
      },
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Description', ' Quantity', 'Price', 'Total'],
            ...order_details.map((order) => [
              order.order_detail_id.toString(),
              order.products.product_name,
              order.quantity.toString(),
              {
                text: CurrencyFormatter.formatCurrency(order.products.price),
                alignment: 'right',
              },
              {
                text: CurrencyFormatter.formatCurrency(
                  order.quantity * order.products.price,
                ),
                alignment: 'right',
              },
            ]),
          ],
        },
      },
      '\n\n',
      {
        columns: [
          {
            width: '*',
            text: '',
          },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    text: CurrencyFormatter.formatCurrency(subTotal),
                    alignment: 'right',
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    text: CurrencyFormatter.formatCurrency(subTotal * 1.15),
                    alignment: 'right',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  };
};

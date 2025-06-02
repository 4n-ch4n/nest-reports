import { DateFormatter } from 'src/helpers';
import type { Content } from 'pdfmake/interfaces';

const logo: Content = {
  image: 'src/assets/logo.png',
  width: 130,
  height: 130,
  alignment: 'center',
  margin: [0, -20, 0, 20],
};

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

const currentDate: Content = {
  text: DateFormatter.getMMDDYYYY(new Date()),
  alignment: 'right',
  margin: [20, 20],
};

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showDate = true, showLogo = true } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate ? currentDate : '';

  const headerSubTitle: Content = subTitle
    ? {
        text: subTitle,
        margin: [0, 2, 0, 0],
        style: { fontSize: 16 },
        alignment: 'center',
      }
    : '';

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: { bold: true, fontSize: 22 },
          },
          headerSubTitle,
        ],
        // text: title, style: { bold: true }
      }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};

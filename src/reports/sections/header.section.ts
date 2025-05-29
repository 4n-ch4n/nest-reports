import { DateFormatter } from 'src/helpers';
import type { Content } from 'pdfmake/interfaces';

const logo: Content = {
  image: 'src/assets/logo.png',
  width: 170,
  height: 170,
  alignment: 'center',
  margin: [0, -20, 0, 20],
};

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showDate = true, showLogo = true } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate
    ? {
        text: DateFormatter.getMMDDYYYY(new Date()),
        alignment: 'right',
        margin: [20, 45, 20, 20],
      }
    : '';

  const headerTitle: Content = title
    ? { text: title, style: { bold: true } }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};

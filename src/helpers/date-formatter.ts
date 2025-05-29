export class DateFormatter {
  static formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  static getMMDDYYYY(date: Date): string {
    return this.formatter.format(date);
  }
}

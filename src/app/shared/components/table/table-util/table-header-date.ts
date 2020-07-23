import { TableHeaderBase } from './table-header-base';
import { format } from 'date-fns'

export class TableHeaderDate extends TableHeaderBase<Date> {
  type = 'date';
  format: string;

  getValue(value: Date): string {
    if (value == null) {
      return '';
    }
    return format(value, this.format);
  }

  constructor(options: {
    key: string,
    label: string,
    format?: string
  }) {
    super(options);
    this.format = options.format || 'yyyy-MM-dd';
  }
}

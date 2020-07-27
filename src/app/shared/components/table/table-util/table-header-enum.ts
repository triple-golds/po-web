import { TableHeaderBase } from './table-header-base';

export class TableHeaderEnum extends TableHeaderBase<number> {
  type = 'boolean';
  options: { key: number, value: string }[];

  getValue(value: number): string {
    for (const opt of this.options) {
      if (opt.key == value) {
        return opt.value
      }
    }
    return ''
  }

  constructor(options: {
    key: string,
    label: string,
    options: { key: number, value: string }[];
  }) {
    super(options);
    this.options = options.options
  }
}

import { TableHeaderBase } from './table-header-base';

export class TableHeaderBoolean extends TableHeaderBase<boolean> {
  type = 'boolean';

  getValue(value: boolean): string {
    if (value == null) {
      return ''
    } else if (value) {
      return '是'
    } else {
      return '否'
    }
  }

  constructor(options: {
    key: string,
    label: string
  }) {
    super(options);
  }
}

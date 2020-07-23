export class TableHeaderBase<T> {
  key: string;
  label: string;
  type: string;

  getValue(value: T): string {
    if (value == null) {
      return ""
    }
    return value.toString();
  }

  constructor(options: {
    key: string,
    label: string
  }) {
    this.key = options.key || '';
    this.label = options.label || '';
  }
}

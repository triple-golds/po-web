export class FormItemBase<T> {
  value: T;
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
  readonly: boolean;
  disabled: boolean
  errorTip: string;
  order: number;
  controlType: string;
  type: string;
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    readonly?: boolean
    disabled?: boolean,
    errorTip?: string,
    order?: number,
    controlType?: string,
    type?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.errorTip = options.errorTip || `请输入${this.label}`;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
  }
}

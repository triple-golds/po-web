import { FormItemBase } from './form-item-base';

export class FormItemSelect extends FormItemBase<string> {
  controlType = 'select';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

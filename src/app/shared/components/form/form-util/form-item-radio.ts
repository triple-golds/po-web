import { FormItemBase } from './form-item-base';

export class FormItemRadio extends FormItemBase<string> {
  controlType = 'radio';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

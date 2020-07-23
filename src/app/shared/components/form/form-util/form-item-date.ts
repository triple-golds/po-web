import { FormItemBase } from './form-item-base';

export class FormItemDate extends FormItemBase<Date> {
  controlType = 'date';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}

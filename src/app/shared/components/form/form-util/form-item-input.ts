import { FormItemBase } from './form-item-base';

export class FormItemInput extends FormItemBase<string> {
  controlType = 'input';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}

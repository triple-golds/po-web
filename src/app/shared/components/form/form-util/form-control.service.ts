import { Injectable } from '@angular/core';
import { FormItemBase } from './form-item-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  constructor() { }

  toFormGroup(questions: FormItemBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      const obj = { value: question.value != null ? question.value : '', disabled: question.disabled };
      group[question.key] = question.required ? new FormControl(obj, Validators.required) : new FormControl(obj);
    });
    return new FormGroup(group);
  }
}

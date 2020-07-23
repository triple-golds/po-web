import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemBase } from './form-util/form-item-base';

@Component({
  selector: 'po-form-item',
  template: `
    <div [formGroup]="form">
      <nz-form-item [ngSwitch]="item.controlType">
        <nz-form-label [nzSpan]="7" [nzRequired]="item.required">{{item.label}}</nz-form-label>
        <nz-form-control [nzSpan]="12" [nzErrorTip]="item.errorTip">
          <input *ngSwitchCase="'input'" nz-input [formControlName]="item.key" [placeholder]="item.placeholder" />
          <nz-date-picker *ngSwitchCase="'date'" [formControlName]="item.key"></nz-date-picker>
          <nz-radio-group *ngSwitchCase="'radio'" [formControlName]="item.key">
            <label *ngFor="let opt of item.options" nz-radio [nzValue]="opt.value">{{opt.key}}</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
    </div>
  `,
  styles: []
})
export class FormItemComponent {
  @Input() form: FormGroup;
  @Input() item: FormItemBase<any>;

  constructor() { }

  // get isValid() { return this.form.controls[this.item.key].valid; }


}

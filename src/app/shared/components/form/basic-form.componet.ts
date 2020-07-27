import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemBase } from './form-util/form-item-base';
import { FormControlService } from './form-util/form-control.service';

@Component({
  selector: 'po-basic-form',
  template: `
    <form nz-form [formGroup]="form" (ngSubmit)="submitForm()">
      <div *ngFor="let item of items">
        <po-form-item [item]="item" [form]="form"></po-form-item>
      </div>
      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzOffset]="16">
          <button [disabled]="form.invalid" nz-button nzType="primary">确定</button>
        </nz-form-control>
      </nz-form-item>
    </form>

  `
})
export class BasicFormComponent implements OnInit {

  @Input() items: FormItemBase<any>[];
  @Output() submited = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor(private fcs: FormControlService) { }

  ngOnInit() {
    console.log('BasicFormComponent', this.items);
    this.form = this.fcs.toFormGroup(this.items);
  }

  resetForm() {
    this.form.reset();
  }

  setFormVal(val: any) {
    // tslint:disable-next-line: forin
    for (const key in this.form.controls) {
      this.form.controls[key].setValue(val[key]);
    }
  }

  submitForm() {
    // tslint:disable-next-line: forin
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }

    if (this.form.valid) {
      this.submited.emit(this.form);
    }
  }




}

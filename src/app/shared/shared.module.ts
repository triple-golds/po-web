import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BasicTableComponent } from './components/table/basic-table.component';
import { BasicFormComponent } from './components/form/basic-form.componet';
import { FormItemComponent } from './components/form/form-item.component';
import { BareTableComponent } from './components/table/bare-table.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';

const ngZorroModule = [
  NzTableModule,
  NzDividerModule,
  NzButtonModule,
  NzFormModule,
  NzDrawerModule,
  NzInputModule,
  NzDatePickerModule,
  NzPopconfirmModule,
  NzModalModule,
  NzRadioModule,
  NzSelectModule
];

// 导出常用的模块，被其它特性模块引用
const exportModule = [
  // ngZorro模块
  NzTableModule,
  NzDividerModule,
  NzButtonModule,
  NzDrawerModule,
  NzFormModule,
  NzLayoutModule,
  NzInputModule,
  NzMessageModule,
  NzModalModule,
  FormsModule,
  ReactiveFormsModule
];

const exportComponents = [
  BasicTableComponent,
  BareTableComponent,
  BasicFormComponent
];

@NgModule({
  declarations: [
    BasicTableComponent,
    BasicFormComponent,
    BareTableComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...ngZorroModule
  ],
  exports: [
    ...exportModule,
    ...exportComponents,
  ]
})
export class SharedModule { }

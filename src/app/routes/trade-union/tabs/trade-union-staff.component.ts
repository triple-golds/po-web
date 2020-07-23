import { Component, Input } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormItemBase } from '@shared/components/form/form-util/form-item-base';
import { FormItemInput } from '@shared/components/form/form-util/form-item-input';
import { FormItemDate } from '@shared/components/form/form-util/form-item-date';
import { TableHeaderBase } from '@shared/components/table/table-util/table-header-base';
import { TableHeaderDate } from '@shared/components/table/table-util/table-header-date';
import { TableHeaderBoolean } from '@shared/components/table/table-util/table-header-boolean';
import { FormItemRadio } from '@shared/components/form/form-util/form-item-radio';

@Component({
  selector: 'po-trade-union-staff',
  template: `
    <po-trade-union-crud [subject]="subject" [tableHeader]="tableHeader" [formItems]="formItems" [teamNode]="teamNode"></po-trade-union-crud>
  `,
  styles: []
})
export class TradeUnionStaffComponent {

  @Input()
  teamNode: NzTreeNodeOptions;

  subject = 'tradeUnionStaffs';

  tableHeader: TableHeaderBase<any>[] = [
    new TableHeaderBase({ label: '员工编号', key: 'code' }),
    new TableHeaderBase({ label: '姓名', key: 'name' }),
    new TableHeaderBase({ label: '性别', key: 'sex' }),
    new TableHeaderBase({ label: '民族', key: 'nation' }),
    new TableHeaderBase({ label: '政治面貌', key: 'political' }),
    new TableHeaderDate({ label: '出生日期', key: 'birthDate' }),
    new TableHeaderBoolean({ label: '婚否', key: 'marriage' }),
    new TableHeaderBoolean({ label: '育否', key: 'giveBirth' }),
    new TableHeaderDate({ label: '入司日期', key: 'entryDate' }),
    new TableHeaderBase({ label: '科室', key: 'department' }),
    new TableHeaderBase({ label: '宿舍号码', key: 'dormitory' }),
    new TableHeaderBase({ label: '爱好特长', key: 'hobby' }),
    new TableHeaderBase({ label: '家庭住址', key: 'address' }),
    new TableHeaderBase({ label: '联系方式', key: 'phone' })
  ];

  formItems: FormItemBase<any>[] = [
    new FormItemInput({ key: 'code', label: '员工编号', required: true }),
    new FormItemInput({ key: 'name', label: '姓名', required: true }),
    new FormItemInput({ key: 'sex', label: '性别' }),
    new FormItemInput({ key: 'nation', label: '民族' }),
    new FormItemInput({ key: 'political', label: '政治面貌' }),
    new FormItemDate({ key: 'birthDate', label: '出生日期' }),
    new FormItemRadio({ key: 'marriage', label: '婚否', options: [{ key: '是', value: true }, { key: '否', value: false }] }),
    new FormItemRadio({ key: 'giveBirth', label: '育否', options: [{ key: '是', value: true }, { key: '否', value: false }] }),
    new FormItemDate({ key: 'entryDate', label: '入司日期' }),
    new FormItemInput({ key: 'department', label: '科室' }),
    new FormItemInput({ key: 'dormitory', label: '宿舍号码' }),
    new FormItemInput({ key: 'hobby', label: '爱好特长' }),
    new FormItemInput({ key: 'address', label: '家庭住址' }),
    new FormItemInput({ key: 'phone', label: '联系方式' })
  ];

  constructor() { }

}

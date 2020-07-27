import { Component, Input } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormItemBase } from '@shared/components/form/form-util/form-item-base';
import { FormItemInput } from '@shared/components/form/form-util/form-item-input';
import { FormItemDate } from '@shared/components/form/form-util/form-item-date';
import { TableHeaderBase } from '@shared/components/table/table-util/table-header-base';
import { TableHeaderDate } from '@shared/components/table/table-util/table-header-date';
import { FormItemRadio } from '@shared/components/form/form-util/form-item-radio';
import { TableHeaderEnum } from '@shared/components/table/table-util/table-header-enum';
import { nation } from '@shared/model/nation';
import { political } from '@shared/model/political';
import { sex } from '@shared/model/sex';
import { FormItemSelect } from '@shared/components/form/form-util/form-item-select';

@Component({
  selector: 'po-trade-union-staff',
  template: `
    <po-trade-union-crud
      [subject]="subject"
      [tableHeader]="tableHeader"
      [cFormItems]="cFormItems"
      [mFormItems]="mFormItems"
      [teamNode]="teamNode"
    ></po-trade-union-crud>
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
    new TableHeaderEnum({ label: '性别', key: 'sex', options: sex }),
    new TableHeaderEnum({ label: '民族', key: 'nation', options: nation }),
    new TableHeaderEnum({ label: '政治面貌', key: 'political', options: political }),
    new TableHeaderDate({ label: '出生日期', key: 'birthDate' }),
    new TableHeaderEnum({ label: '婚否', key: 'isMarriage', options: [{ key: 0, value: '否' }, { key: 1, value: '是' }] }),
    new TableHeaderEnum({ label: '育否', key: 'isGiveBirth', options: [{ key: 0, value: '否' }, { key: 1, value: '是' }] }),
    new TableHeaderDate({ label: '入司日期', key: 'entryDate' }),
    new TableHeaderBase({ label: '科室', key: 'department' }),
    new TableHeaderBase({ label: '宿舍号码', key: 'dormitory' }),
    new TableHeaderBase({ label: '爱好特长', key: 'hobby' }),
    new TableHeaderBase({ label: '家庭住址', key: 'address' }),
    new TableHeaderBase({ label: '联系方式', key: 'phone' })
  ];

  cFormItems: FormItemBase<any>[] = [
    new FormItemInput({ key: 'code', label: '员工编号', required: true }),
    new FormItemInput({ key: 'name', label: '姓名', required: true }),
    new FormItemRadio({ key: 'sex', label: '性别', required: true, options: sex }),
    new FormItemSelect({ key: 'nation', label: '民族', required: true, options: nation }),
    new FormItemSelect({ key: 'political', label: '政治面貌', required: true, options: political }),
    new FormItemDate({ key: 'birthDate', label: '出生日期', required: true }),
    new FormItemRadio({ key: 'isMarriage', label: '婚否', required: true, options: [{ key: 1, value: '是' }, { key: 0, value: '否' }] }),
    new FormItemRadio({ key: 'isGiveBirth', label: '育否', required: true, options: [{ key: 1, value: '是' }, { key: 0, value: '否' }] }),
    new FormItemDate({ key: 'entryDate', label: '入司日期', required: true }),
    new FormItemInput({ key: 'department', label: '科室' }),
    new FormItemInput({ key: 'dormitory', label: '宿舍号码' }),
    new FormItemInput({ key: 'hobby', label: '爱好特长' }),
    new FormItemInput({ key: 'address', label: '家庭住址' }),
    new FormItemInput({ key: 'phone', label: '联系方式' })
  ];

  mFormItems: FormItemBase<any>[] = [
    new FormItemInput({ key: 'code', label: '员工编号', required: true, disabled: true }),
    new FormItemInput({ key: 'name', label: '姓名', required: true }),
    new FormItemRadio({ key: 'sex', label: '性别', required: true, options: sex }),
    new FormItemSelect({ key: 'nation', label: '民族', required: true, options: nation }),
    new FormItemSelect({ key: 'political', label: '政治面貌', required: true, options: political }),
    new FormItemDate({ key: 'birthDate', label: '出生日期', required: true }),
    new FormItemRadio({ key: 'isMarriage', label: '婚否', required: true, options: [{ key: 1, value: '是' }, { key: 0, value: '否' }] }),
    new FormItemRadio({ key: 'isGiveBirth', label: '育否', required: true, options: [{ key: 1, value: '是' }, { key: 0, value: '否' }] }),
    new FormItemDate({ key: 'entryDate', label: '入司日期', required: true }),
    new FormItemInput({ key: 'department', label: '科室' }),
    new FormItemInput({ key: 'dormitory', label: '宿舍号码' }),
    new FormItemInput({ key: 'hobby', label: '爱好特长' }),
    new FormItemInput({ key: 'address', label: '家庭住址' }),
    new FormItemInput({ key: 'phone', label: '联系方式' })
  ];

  constructor() { }

}

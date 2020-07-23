import { Component, Input } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormItemBase } from '@shared/components/form/form-util/form-item-base';
import { FormItemInput } from '@shared/components/form/form-util/form-item-input';
import { FormItemDate } from '@shared/components/form/form-util/form-item-date';
import { TableHeaderBase } from '@shared/components/table/table-util/table-header-base';
import { TableHeaderDate } from '@shared/components/table/table-util/table-header-date';

@Component({
  selector: 'po-trade-union-fund',
  template: `
    <po-trade-union-crud [subject]="subject" [tableHeader]="tableHeader" [formItems]="formItems" [teamNode]="teamNode"></po-trade-union-crud>
  `,
  styles: []
})
export class TradeUnionFundComponent {

  @Input()
  teamNode: NzTreeNodeOptions;

  subject = 'tradeUnionFunds';

  tableHeader: TableHeaderBase<any>[] = [
    new TableHeaderBase({ label: '员工编号', key: 'code' }),
    new TableHeaderBase({ label: '姓名', key: 'name' }),
    new TableHeaderBase({ label: '性别', key: 'sex' }),
    new TableHeaderBase({ label: '年龄', key: 'age' }),
    new TableHeaderBase({ label: '个人月收入', key: 'salary' }),
    new TableHeaderBase({ label: '家庭人口数', key: 'people' }),
    new TableHeaderDate({ label: '入司日期', key: 'entryDate' }),
    new TableHeaderBase({ label: '科室岗位', key: 'department' }),
    new TableHeaderBase({ label: '公司慰问次数', key: 'sympathyTimes' }),
    new TableHeaderBase({ label: '联系方式', key: 'phone' }),
    new TableHeaderBase({ label: '双职工配偶姓名', key: 'coupleName' }),
    new TableHeaderBase({ label: '配偶员工编号', key: 'coupleCode' }),
    new TableHeaderBase({ label: '出现困难主要原因', key: 'reason' })
  ];

  formItems: FormItemBase<any>[] = [
    new FormItemInput({ key: 'code', label: '员工编号', required: true }),
    new FormItemInput({ key: 'name', label: '姓名', required: true }),
    new FormItemInput({ key: 'sex', label: '性别' }),
    new FormItemInput({ key: 'age', label: '年龄' }),
    new FormItemInput({ key: 'salary', label: '个人月收入' }),
    new FormItemInput({ key: 'people', label: '家庭人口数' }),
    new FormItemDate({ key: 'entryDate', label: '入司日期' }),
    new FormItemInput({ key: 'department', label: '科室岗位' }),
    new FormItemInput({ key: 'sympathyTimes', label: '公司慰问次数' }),
    new FormItemInput({ key: 'phone', label: '联系方式' }),
    new FormItemInput({ key: 'coupleName', label: '双职工配偶姓名' }),
    new FormItemInput({ key: 'coupleCode', label: '配偶员工编号' }),
    new FormItemInput({ key: 'reason', label: '出现困难主要原因' })];

  constructor() { }

}

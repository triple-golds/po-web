import { Component, Input } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormItemBase } from '@shared/components/form/form-util/form-item-base';
import { FormItemInput } from '@shared/components/form/form-util/form-item-input';
import { FormItemDate } from '@shared/components/form/form-util/form-item-date';
import { TableHeaderBase } from '@shared/components/table/table-util/table-header-base';
import { TableHeaderDate } from '@shared/components/table/table-util/table-header-date';

@Component({
  selector: 'po-trade-union-marriage',
  template: `
    <po-trade-union-crud [subject]="subject" [tableHeader]="tableHeader" [mFormItems]="formItems" [cFormItems]="formItems" [teamNode]="teamNode"></po-trade-union-crud>
  `,
  styles: []
})
export class TradeUnionMarriageComponent {

  @Input()
  teamNode: NzTreeNodeOptions;

  subject = 'tradeUnionMarriages';

  tableHeader: TableHeaderBase<any>[] = [
    new TableHeaderBase({ label: '员工编号', key: 'code' }),
    new TableHeaderBase({ label: '姓名', key: 'name' }),
    new TableHeaderBase({ label: '性别', key: 'sex' }),
    new TableHeaderBase({ label: '年龄', key: 'age' }),
    new TableHeaderBase({ label: '籍贯', key: 'nativePlace' }),
    new TableHeaderBase({ label: '配偶姓名', key: 'coupleName' }),
    new TableHeaderBase({ label: '是否是BOE员工', key: 'boe' }),
    new TableHeaderDate({ label: '结婚日期', key: 'marriageDate' }),
    new TableHeaderDate({ label: '生育日期', key: 'reproductionDate' }),
    new TableHeaderBase({ label: '联系方式', key: 'phone' }),
    new TableHeaderDate({ label: '生育慰问时间', key: 'sympathyDate' }),
    new TableHeaderBase({ label: '慰问人', key: 'sympathyPeople' }),
    new TableHeaderBase({ label: '花费费用', key: 'cost' })
  ];

  formItems: FormItemBase<any>[] = [
    new FormItemInput({ label: '员工编号', key: 'code' }),
    new FormItemInput({ label: '姓名', key: 'name' }),
    new FormItemInput({ label: '性别', key: 'sex' }),
    new FormItemInput({ label: '年龄', key: 'age' }),
    new FormItemInput({ label: '籍贯', key: 'nativePlace' }),
    new FormItemInput({ label: '配偶姓名', key: 'coupleName' }),
    new FormItemInput({ label: '是否是BOE员工', key: 'boe' }),
    new FormItemDate({ label: '结婚日期', key: 'marriageDate' }),
    new FormItemDate({ label: '生育日期', key: 'reproductionDate' }),
    new FormItemInput({ label: '联系方式', key: 'phone' }),
    new FormItemDate({ label: '生育慰问时间', key: 'sympathyDate' }),
    new FormItemInput({ label: '慰问人', key: 'sympathyPeople' }),
    new FormItemInput({ label: '花费费用', key: 'cost' }),
  ];

  constructor() { }

}

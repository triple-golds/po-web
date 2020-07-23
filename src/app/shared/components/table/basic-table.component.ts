import { Component, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { TableHeaderBase } from './table-util/table-header-base';
import { TableHeaderDate } from './table-util/table-header-date';

@Component({
  selector: 'po-basic-table',
  template: `
    <nz-table #basicTable nzSize="small" [nzData]="tableData">
      <thead>
        <tr>
          <th *ngFor="let headItem of poHeader">
            {{headItem.label}}
          </th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let rowData of basicTable.data">
          <td *ngFor="let itemHeader of poHeader">
            {{itemHeader.getValue(rowData[itemHeader.key])}}
          </td>
          <td>
            <a (click)="modify(rowData)">修改</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a nz-popconfirm nzPopconfirmTitle="是否删除?" (nzOnConfirm)="delete(rowData)">删除</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class BasicTableComponent implements OnChanges {

  tableData: any[];
  @Input() poData: any[];
  @Input() poHeader: TableHeaderBase<any>[];

  @Output() poModify = new EventEmitter<any>();
  @Output() poDelete = new EventEmitter<any>();

  modify(rowData: any) {
    this.poModify.emit(rowData);
  }

  delete(rowData: any) {
    this.poDelete.emit(rowData);
  }

  baseToDate(base: TableHeaderBase<any>): TableHeaderDate {
    return base as TableHeaderDate;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
    if (this.poData && this.poHeader) {
      for (const poItem of this.poData) {
        for (const headItem of this.poHeader) {
          if (headItem.type === 'date' && poItem[headItem.key]) {
            poItem[headItem.key] = new Date(poItem[headItem.key]);
          }
        }
      }
      this.tableData = this.poData;
    }
  }

}

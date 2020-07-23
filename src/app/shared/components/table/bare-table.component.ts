import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { TableHeaderBase } from './table-util/table-header-base';
import { TableHeaderDate } from './table-util/table-header-date';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'po-bare-table',
  template: `
    <nz-table #bareTable nzSize="small" [nzData]="tableData" nzFrontPagination="false" [nzScroll]="{ y: '240px' }">
      <thead>
        <tr>
          <th *ngFor="let headItem of poHeader">
            {{headItem.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let rowData of bareTable.data">
          <td *ngFor="let itemHeader of poHeader" >
            {{itemHeader.getValue(rowData[itemHeader.key])}}
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class BareTableComponent implements OnChanges {

  tableData: any[];

  @Input() poHeader: TableHeaderBase<any>[];
  @Input() poData: any[];

  baseToDate(base: TableHeaderBase<any>): TableHeaderDate {
    return base as TableHeaderDate;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.poData && this.poHeader) {
      for (const poItem of this.poData) {
        for (const headItem of this.poHeader) {
          if (headItem.type === 'date' && poItem[headItem.key]) {
            const d = new Date(poItem[headItem.key]);
            // if (d.toString() !== 'Invalid Date') {
            poItem[headItem.key] = d;
            // }
          }
        }
      }
      this.tableData = this.poData;
    }
  }


}

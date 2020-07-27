import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TradeUnionService } from '../trade-union.service';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormItemBase } from '@shared/components/form/form-util/form-item-base';
import { BasicFormComponent } from '@shared/components/form/basic-form.componet';
import { TableHeaderBase } from '@shared/components/table/table-util/table-header-base';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer';

export enum FormAction { create, modify, delete }

@Component({
  selector: 'po-trade-union-crud',
  templateUrl: './trade-union-crud.component.html',
  styleUrls: ['./trade-union-crud.component.less']
})
export class TradeUnionCrudComponent {

  @Input()
  subject: string;

  @Input()
  tableHeader: TableHeaderBase<any>[];

  @Input()
  cFormItems: FormItemBase<any>[];

  @Input()
  mFormItems: FormItemBase<any>[];

  @Input()
  set teamNode(teamNode: NzTreeNodeOptions) {
    if (teamNode) {
      console.log(teamNode);
      this.teamLinks = teamNode._links;
      this.refreshTable();
    }
  }

  @ViewChild('drawerTemplate', { static: false })
  drawerTemplate: TemplateRef<any>;

  // 当前操作条目方法
  private itemCurrentAction: FormAction;
  // 当前操作条目的url
  private itemCurrentUrl: string;
  // 当前工会小组links信息
  private teamLinks: any;

  // drawerConfig: { visible: boolean, title?: string } = { visible: false };
  modalConfig = { visible: false };
  tableData: any[];
  importTableData: any[];
  importText: string;
  importErrorMsg: string;


  // 点击创建或修改时，指向当前的数据
  formItems: FormItemBase<any>[];



  constructor(
    private tus: TradeUnionService,
    private message: NzMessageService,
    private drawerService: NzDrawerService
  ) { }

  refreshTable() {
    this.tus.getTableData(this.teamLinks[this.subject].href, this.subject).subscribe(
      (res) => {
        console.log(res);
        this.tableData = res;
      }
    );
  }

  showModal() {
    this.modalConfig.visible = true;
    this.importTableData = [];
    this.importText = '';
    this.importErrorMsg = '';
  }

  showCreateDrawer() {
    this.itemCurrentAction = FormAction.create;
    this.itemCurrentUrl = `/${this.subject}`;
    this.formItems = this.cFormItems;
    const drawerRef = this.drawerService.create({
      nzTitle: '新建',
      nzWidth: 650,
      nzMaskClosable: false,
      nzContent: this.drawerTemplate,
    });
  }

  showModifyDrawer(rowData: any) {
    this.itemCurrentAction = FormAction.modify;
    this.itemCurrentUrl = rowData._links.self.href;
    this.mFormItems.forEach((item: FormItemBase<any>) => {
      item.value = '';
      for (const key in rowData) {
        if (key == item.key) {
          item.value = rowData[key];
          break;
        }
      }
    })
    this.formItems = this.mFormItems;
    console.log(this.formItems);
    const drawerRef = this.drawerService.create({
      nzTitle: '修改',
      nzWidth: 650,
      nzMaskClosable: false,
      nzContent: this.drawerTemplate,
    });
  }

  deleteRow(rowData: any) {
    this.itemCurrentAction = FormAction.delete;
    this.itemCurrentUrl = rowData._links.self.href;

    this.tus.deletetData(rowData._links.self.href).subscribe(
      (res) => {
        this.message.success('删除成功');
        this.refreshTable();
      }
    );
  }

  submitForm(formGroup: FormGroup, drawerRef: NzDrawerRef) {
    const body = formGroup.value;

    switch (this.itemCurrentAction) {
      case FormAction.create:
        body.team = this.teamLinks.self.href;
        this.tus.insertData(this.itemCurrentUrl, body).subscribe(
          () => {
            this.message.success('增加成功');
            drawerRef.close();
            this.refreshTable();
          }
        );
        break;
      case FormAction.modify:
        this.tus.modifyData(this.itemCurrentUrl, body).subscribe(
          () => {
            this.message.success('修改成功');
            drawerRef.close();
            this.refreshTable();
          }
        );
        break;
    }
  }


  handleOk(): void {
    this.itemCurrentUrl = `/${this.subject}`;
    this.importTableData.forEach(
      (val) => val.team = this.teamLinks.self.href
    );
    console.log(this.importTableData);
    this.tus.insertDataList(this.itemCurrentUrl, this.importTableData).subscribe(
      () => {
        this.closeModal();
      }
    );
  }

  closeModal(): void {
    this.modalConfig.visible = false;
    this.refreshTable();
  }

  textOnChange(): void {
    if (!!this.importText) {
      const tableData = [];
      for (const rowText of this.importText.split('\n')) {
        if (rowText && rowText.trim()) {
          const rowTextList = rowText.split('\t');
          const rowData = {};
          for (let i = 0; i < this.tableHeader.length; i++) {
            if (rowTextList[i] && rowTextList[i].trim()) {
              let v: string | Date = rowTextList[i].trim();
              // console.log('this.tableHeader[i].value', this.tableHeader[i].value)
              if(this.tableHeader[i].label)
              if (this.tableHeader[i].type === 'date') {
                v = new Date(v);
                // console.log('v',v.toString());
                if (v.toString() === 'Invalid Date') {
                  this.importErrorMsg = '数据里含有不合法的日期格式，请修正后重新粘贴！';
                  return;
                }
              }
              rowData[this.tableHeader[i].key] = v;
            }
          }
          tableData.push(rowData);
        }
      }
      this.importTableData = tableData;
    }
  }

}

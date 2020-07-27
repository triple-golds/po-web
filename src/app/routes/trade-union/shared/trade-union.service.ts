import { Injectable } from '@angular/core';
import { AuthenticationService } from '@core/service/authentication.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { RestLinkService } from '@core/service/rest-link.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeUnionService {

  constructor(
    private authService: AuthenticationService,
    private linkService: RestLinkService,
    private http: HttpClient
  ) {
    // this.teamHref = this.authService.userLinks.tradeUnionTeam.href;
  }

  getMyTeam() {
    const url = this.authService.userLinks.tradeUnionTeam.href;
    return this.http.get<NzTreeNodeOptions[]>(this.linkService.generateLink(url))
      .pipe(
        map((res: any) => this.manageTreeNode(res._embedded.tradeUnionTeams))
      );
  }

  getTableData(url: string, subject: string) {
    return this.http.get<any[]>(url)
      .pipe(
        map((res: any) => res._embedded[subject])
      );
  }

  insertData(url: string, body: any) {
    return this.http.post(url, body);
  }

  insertDataList(url: string, bodyList: any[]) {
    // bodyList.map(v => this.insertData(url, v));
    return forkJoin(bodyList.map(v => this.insertData(url, v)));
  }

  deletetData(url: string) {
    return this.http.delete(url);
  }

  modifyData(url: string, body: any) {
    return this.http.patch(url, body);
  }

  manageTreeNode(treeData: any[]): NzTreeNodeOptions[] {
    let num = 1;
    const nzTree: NzTreeNodeOptions[] = [];
    for (const nodeData of treeData) {
      let find = false;
      for (const nzNode of nzTree) {
        if (nzNode.title === nodeData.subUnion) {
          nzNode.children.push({
            key: '' + num++,
            title: nodeData.teamName,
            _links: nodeData._links,
            isLeaf: true
          });
          find = true;
          break;
        }
      }
      if (!find) {
        nzTree.push({
          key: '' + num++,
          title: nodeData.subUnion,
          selectable: false,

          children: [
            {
              key: '' + num++,
              title: nodeData.teamName,
              _links: nodeData._links,
              isLeaf: true
            }]
        });
      }
    }
    return nzTree;
  }
}

import { Component, OnInit } from '@angular/core';
import { NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { TradeUnionService } from './shared/trade-union.service';

@Component({
  selector: 'po-trade-union',
  templateUrl: './trade-union.component.html',
  styleUrls: ['./trade-union.component.less']
})
export class TradeUnionComponent implements OnInit {
  teamNode: NzTreeNodeOptions;
  nodes: NzTreeNodeOptions[];
  defaultSelectedKeys: string[];
  defaultExpandedKeys: string[];

  constructor(private service: TradeUnionService) {
    this.service.getMyTeam().subscribe(
      (nzTree) => {
        this.nodes = nzTree;
        this.defaultExpandedKeys = [nzTree[0].key];
        this.defaultSelectedKeys = [nzTree[0].children[0].key];
        this.teamNode = nzTree[0].children[0];
      }
    );
  }

  ngOnInit(): void {
  }


  nodeClick(event: NzFormatEmitEvent): void {
    if (!event.node.isLeaf) {
      return;
    }
    if (!event.node.isSelected) {
      event.node.isSelected = true;
      return;
    }
    this.teamNode = event.node.origin;
  }

}

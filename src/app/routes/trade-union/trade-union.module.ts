import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TradeUnionRoutingModule } from './trade-union-routing.module';

import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { TradeUnionComponent } from './trade-union.component';
import { TradeUnionCrudComponent } from './shared/trade-union-crud/trade-union-crud.component';
import { TradeUnionStaffComponent } from './tabs/trade-union-staff.component';
import { TradeUnionFundComponent } from './tabs/trade-union-fund.component';
import { TradeUnionMarriageComponent } from './tabs/trade-union-marriage.component';


const ngZorroModule = [
  NzTreeModule,
  NzTabsModule,
  NzSpaceModule
];

@NgModule({
  declarations: [
    TradeUnionComponent,
    TradeUnionCrudComponent,
    TradeUnionStaffComponent,
    TradeUnionFundComponent,
    TradeUnionMarriageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TradeUnionRoutingModule,
    ...ngZorroModule
  ]
})
export class TradeUnionModule { }

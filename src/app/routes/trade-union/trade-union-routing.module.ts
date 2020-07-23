import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeUnionComponent } from './trade-union.component';


const routes: Routes = [
  { path: '', component: TradeUnionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeUnionRoutingModule { }

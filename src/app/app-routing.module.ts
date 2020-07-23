import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/service/auth.guard';


const routes: Routes = [
  {
    path: 'trade-union',
    canActivate: [AuthGuard],
    loadChildren: () => import('@routes/trade-union/trade-union.module').then(m => m.TradeUnionModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@routes/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/trade-union' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

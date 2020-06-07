import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/auction', pathMatch: 'full' },
  {
    path: 'auction',
    loadChildren: () => import('./auction/auction.module').then(m => m.AuctionModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

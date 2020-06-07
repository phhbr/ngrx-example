import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OverviewComponent, DetailsComponent],
  imports: [
    SharedModule,
    AuctionRoutingModule
  ],
  exports: [AuctionRoutingModule]
})
export class AuctionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NavComponent, AvatarComponent, HeaderComponent],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }

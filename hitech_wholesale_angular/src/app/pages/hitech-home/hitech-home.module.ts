import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HitechHomeRoutingModule } from './hitech-home-routing.module';
import { HitechHomeComponent } from './hitech-home.component';


@NgModule({
  declarations: [
    HitechHomeComponent
  ],
  imports: [
    CommonModule,
    HitechHomeRoutingModule
  ]
})
export class HitechHomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HitechHomeRoutingModule } from './hitech-home-routing.module';
import { HitechHomeComponent } from './hitech-home.component';
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
// import { BasePanelMenuItem } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    HitechHomeComponent
  ],
  imports: [
    CommonModule,
    HitechHomeRoutingModule,
    ButtonModule,
    MenubarModule,
    // MenuItem,
    // BasePanelMenuItem
  ]
})
export class HitechHomeModule { }

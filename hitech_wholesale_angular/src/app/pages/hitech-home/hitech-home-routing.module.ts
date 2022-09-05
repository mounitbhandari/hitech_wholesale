import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitechHomeComponent } from './hitech-home.component';

const routes: Routes = [{ path: '', component: HitechHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HitechHomeRoutingModule { }

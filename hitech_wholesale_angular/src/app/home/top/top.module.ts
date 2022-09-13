import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { CarouselModule } from '@coreui/angular';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
    declarations: [
        TopComponent
    ],
    exports: [
        TopComponent
    ],
    imports: [
        CommonModule,
        TopRoutingModule,
        NgbModule,
        IvyCarouselModule,
        NgbCarouselModule,
        CarouselModule,
        
    ]
})
export class TopModule { }

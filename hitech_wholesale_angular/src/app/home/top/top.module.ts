import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { CarouselModule } from '@coreui/angular';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule
        
    ]
})
export class TopModule { }

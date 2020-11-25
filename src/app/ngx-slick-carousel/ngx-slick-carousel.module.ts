import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CarouselComponent}
];

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgxSlickCarouselModule { }

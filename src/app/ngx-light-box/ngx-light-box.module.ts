import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLightboxComponent } from './ngx-lightbox/ngx-lightbox.component';
import { LightboxModule } from 'ngx-lightbox';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: NgxLightboxComponent }
];

@NgModule({
  declarations: [
    NgxLightboxComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgxLightBoxModule { }

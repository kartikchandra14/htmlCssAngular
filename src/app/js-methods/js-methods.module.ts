import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadStartComponent } from './pad-start/pad-start.component';
import { RouterModule, Routes } from '@angular/router';
import { JsMethodsHomeComponent } from './js-methods-home/js-methods-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: JsMethodsHomeComponent },
  { path: 'padStart', component: PadStartComponent}
];

@NgModule({
  declarations: [
    PadStartComponent,
    JsMethodsHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JsMethodsModule { }

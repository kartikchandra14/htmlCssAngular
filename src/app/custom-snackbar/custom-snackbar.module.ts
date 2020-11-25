import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastHomeUsingToastHereAlsoComponent } from './toast-home-using-toast-here-also/toast-home-using-toast-here-also.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ToastHomeUsingToastHereAlsoComponent },
  { path: 'toastSnackbar', component: ToastComponent }
];

@NgModule({
  declarations: [
    ToastComponent,
    ToastHomeUsingToastHereAlsoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomSnackbarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageViewInCircleComponent } from './percentage-view-in-circle/percentage-view-in-circle.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PercentageViewInCircleComponent}
];

@NgModule({
  declarations: [
    PercentageViewInCircleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PercentageInCircleModule { }

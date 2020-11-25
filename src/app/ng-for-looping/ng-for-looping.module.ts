import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './ng-for/ng-for.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', component: NgForComponent}
];

@NgModule({
  declarations: [NgForComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgForLoopingModule { }

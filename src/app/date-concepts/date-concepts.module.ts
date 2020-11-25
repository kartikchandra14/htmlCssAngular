import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateConceptsHomeComponent } from './date-concepts-home/date-concepts-home.component';
import { ConvertDateFromOneFormToAnotherComponent } from './convert-date-from-one-form-to-another/convert-date-from-one-form-to-another.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DateConceptsHomeComponent },
  { path: 'oneFormToAnother', component: ConvertDateFromOneFormToAnotherComponent },
];

@NgModule({
  declarations: [DateConceptsHomeComponent, ConvertDateFromOneFormToAnotherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DateConceptsModule { }

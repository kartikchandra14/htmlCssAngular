import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceRxjsMethodSearchComponent } from './debounce-rxjs-method-search/debounce-rxjs-method-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DebounceRxjsMethodSearchComponent }
];

@NgModule({
  declarations: [DebounceRxjsMethodSearchComponent],
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
export class SearchUsingDebounceRxjsModule { }

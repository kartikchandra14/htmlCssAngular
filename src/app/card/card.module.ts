import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  { path: '', component: CardComponent }
];

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CardModule { }

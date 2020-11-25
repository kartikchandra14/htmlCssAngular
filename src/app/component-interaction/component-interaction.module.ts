import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base1Component } from './base1/base1.component';
import { Child1Component } from './child1/child1.component';



@NgModule({
  declarations: [Base1Component, Child1Component],
  imports: [
    CommonModule
  ]
})
export class ComponentInteractionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: DragDropComponent}
];

@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MyserviceService
  ]
})
export class CdkDragDropModule { }

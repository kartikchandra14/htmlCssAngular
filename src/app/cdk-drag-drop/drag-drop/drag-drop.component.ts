// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-drag-drop',
//   templateUrl: './drag-drop.component.html',
//   styleUrls: ['./drag-drop.component.css']
// })
// export class DragDropComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

   title = 'Angular 7 Project!';
   public personaldetails = [];
   userlist;
   constructor(private myservice: MyserviceService) {}
   ngOnInit(): void {
      this.myservice.getData().subscribe((data) => {
         this.personaldetails = Array.from(Object.keys(data), k => data[k]);
         console.log(this.personaldetails);
      });
   }
   onDrop(event: CdkDragDrop<string[]>): void {
      if (event.previousContainer === event.container) {
         moveItemInArray(event.container.data,
            event.previousIndex, event.currentIndex);
      } else {
         transferArrayItem(event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex);
      }
   }
}

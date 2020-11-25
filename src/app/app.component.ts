import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmlCssAngular';
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor(private router: Router){}
  moveToFormPage(): void{
    this.router.navigate(['form']);
  }

  moveToCardPage(): void{
    this.router.navigate(['card']);
  }

  moveToPercentagePage(): void{
    this.router.navigate(['percentage']);
  }
  moveToCdkDragDropPage(): void{
    this.router.navigate(['cdkDragDrop']);
  }
  moveToSlickCarousel(): void{
    this.router.navigate(['slickCarousel']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmlCssAngular';

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
}

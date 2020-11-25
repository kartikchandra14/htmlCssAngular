import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-home-using-toast-here-also',
  templateUrl: './toast-home-using-toast-here-also.component.html',
  styleUrls: ['./toast-home-using-toast-here-also.component.css']
})
export class ToastHomeUsingToastHereAlsoComponent implements OnInit {
  messagePassed;
  showOrNot;
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  openSnackbar(){
    // if (this.showOrNot !== 'show'){
      this.showOrNot = 'show';
      this.messagePassed = `successfully shown !! ${this.count++} `;  // change the message for @Input to be work correctly in toast component
    // }else{
    //   this.showOrNot = 'sho';
    //   this.messagePassed = 'successfully shown 2 !!';
    // }
  }
}

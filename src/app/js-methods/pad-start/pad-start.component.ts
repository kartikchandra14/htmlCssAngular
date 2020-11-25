import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pad-start',
  templateUrl: './pad-start.component.html',
  styleUrls: ['./pad-start.component.css']
})
export class PadStartComponent implements OnInit {

  numberInput;
  showNumber;
  showNumberUsingPadStartOfThreeDigit;
  constructor() { }

  ngOnInit(): void {
  }

  changeInputNumber(changeInputValuePassed){
    console.log('changeInputNumber', changeInputValuePassed);
    // this.numberInput = changeInputValuePassed
    this.showNumber = changeInputValuePassed.padStart(2, '0'); // padStart of 2 digit only because we pass 2 as first as parameter to padStart() method
    this.showNumberUsingPadStartOfThreeDigit = changeInputValuePassed.padStart(3, '0');
  }

}

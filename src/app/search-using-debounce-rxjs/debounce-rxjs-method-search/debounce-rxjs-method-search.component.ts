import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-rxjs-method-search',
  templateUrl: './debounce-rxjs-method-search.component.html',
  styleUrls: ['./debounce-rxjs-method-search.component.css']
})
export class DebounceRxjsMethodSearchComponent implements OnInit {

  searchResults = [];
  searchInput = new Subject<any>();
  searchText: string;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit_debounceRXJS', this.searchText);
    this.searchInput.pipe(
  debounceTime(400),
  distinctUntilChanged())
  .subscribe(value => {
    console.log('debounce_Searching_AFTER_400ms', value);
    // call API there after subscribing/getting value
  });
  }



}

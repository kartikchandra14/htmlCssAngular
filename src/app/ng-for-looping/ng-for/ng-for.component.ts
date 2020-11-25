import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  // loopingInObjectsData = {name: 'A', class: 'Sec A'}, {name: 'b', class: 'Sec b'}, {name: 'C', class: 'Sec C'};
  loopingInObjectsData = [{name: 'A', class: 'Sec A'}, {name: 'b', class: 'Sec b'}];
constructor() { }

ngOnInit(): void {
}


}

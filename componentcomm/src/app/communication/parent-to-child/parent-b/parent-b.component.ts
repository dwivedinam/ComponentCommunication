import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.scss']
})
export class ParentBComponent implements OnInit {
clickedvalue: string;
dataList = ['a', 'b', 'c', 'd', 'e', 'f'];
  constructor() { }

  ngOnInit(): void {

  }
  onClick(data: any){
    this.clickedvalue = data;

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.scss']
})
export class ChildCComponent implements OnInit {
  message;
  count = 0;


   increaseByOne() {
    this.count = this.count + 1;
    this.message = 'Counter: ' + this.count;
  }

  decreaseByOne() {
    this.count = this.count - 1;
    this.message = 'Counter: ' + this.count;
  }
  constructor() { }

  ngOnInit(): void {
  }


}

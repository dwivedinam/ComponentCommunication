import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
@Input()
value: string;
  constructor() { }

  ngOnInit(): void {
  }

}

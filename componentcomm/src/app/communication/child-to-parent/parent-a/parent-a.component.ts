import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss']
})
export class ParentAComponent implements OnInit {
  congCount = 0;
  bjpCount = 0;
  rjdCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onParent(value){
    if(value === 'bjp'){
      this.bjpCount = this.bjpCount + 1;
    } else if(value === 'cong'){
      this.congCount = this.congCount + 1;

    } else if(value === 'jds'){
      this.rjdCount = this.rjdCount + 1;
    }

  }
}

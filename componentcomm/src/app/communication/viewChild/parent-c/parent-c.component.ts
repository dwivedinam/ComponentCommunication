import { CpColorDirective } from './../viechild.directive';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildCComponent } from '../child-c/child-c.component';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.scss']
})
export class ParentCComponent implements AfterViewInit{
  @ViewChild(ChildCComponent)
  private childCComponent: ChildCComponent;
  @ViewChild('name') private elname: ElementRef;
  @ViewChild('number') public elnumber: ElementRef;
  @ViewChild(CpColorDirective)
  private cpColorDirective: CpColorDirective;
    changeColor(color: string) {
        this.cpColorDirective.change(color);
    }
    ngAfterViewInit(){
    this.elname.nativeElement.style.color = 'red';
    this.elnumber.nativeElement.style.color = 'blue';
    }

  increase() {
    this.childCComponent.increaseByOne();
  }
   decrease() {
    this.childCComponent.decreaseByOne();
  }
  constructor() { }




}


import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookViewComponent } from './book-view/book-view.component';
import { Router } from '@angular/router';
import { SchoolBookComponent } from './school-book/school-book.component';


@NgModule({
  declarations: [BookViewComponent, SchoolBookComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }

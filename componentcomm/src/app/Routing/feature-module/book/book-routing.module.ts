import { BookViewComponent } from './book-view/book-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolBookComponent } from './school-book/school-book.component';

const routes: Routes = [{
  path: '' , component: BookViewComponent,
},
{
  path: 'school' , component: SchoolBookComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

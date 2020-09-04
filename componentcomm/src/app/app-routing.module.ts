import { UserComponent } from './Routing/user/user.component';

import { BookModule } from './Routing/feature-module/book/book.module';
import {BagModule} from './Routing/feature-module/bag/bag.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { UserService } from './Routing/user.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Routing/users/users.component';
import { DepartmentComponent } from './Routing/Navigation-routing/department/department.component';
import { BagsComponent } from './Routing/Navigation-routing/bags/bags.component';
import { SchoolComponent } from './Routing/Navigation-routing/school/school.component';
import { SidenavigationComponent } from './Routing/Navigation-routing/sidenavigation/sidenavigation.component';
import { UserDetailsComponent } from './Routing/Navigation-routing/user-details/user-details.component';

// Module communication

const routes: Routes = [
  {
    path: '',
   component: SidenavigationComponent
  },
  {
    path: 'Book',
    loadChildren: () => import('./Routing/feature-module/book/book.module')
    .then(mod => mod.BookModule)
  },
  {
    path: 'Bag',
    loadChildren: () => import('./Routing/feature-module/bag/bag.module')
    .then(mod => mod.BagModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

// Component communication

// const routes: Routes = [
//   {
//     path: 'about' ,
//     component: AboutComponent
//   },
//   {
//     path: 'contact' ,
//      component: ContactComponent
//   },
//   {
//     path: 'user' ,
//      component: UserComponent
//   },
//   {
//     path: 'users/:id' ,
//      component: UsersComponent
//   },
//   {
//     path: '' ,
//      redirectTo: 'about' , pathMatch: 'full'
//   },
//   {
//     path: '**' ,
//      redirectTo: 'about'
//   },
// ]

// Final task routing

// const routes: Routes = [
//   {
//     path: '' ,
//     component: SidenavigationComponent
//   },
//   {
//     path: 'details' ,
//      component: UserDetailsComponent
//   },
//   {
//     path: 'bag' ,
//     component: BagsComponent
//   },
//   {
//     path: 'deparment' ,
//      component: DepartmentComponent
//   },
//   {
//     path: 'school' ,
//      component: SchoolComponent
//   },

//   {
//     path: '**' ,
//      redirectTo: ''
//   },
// ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }

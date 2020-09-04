import { UserService } from './Routing/user.service';

import { EmployelistComponent } from './employelist/employelist.component';

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonService } from './common.service';
import { ChildAComponent } from './communication/child-to-parent/child-a/child-a.component';
import { ParentAComponent } from './communication/child-to-parent/parent-a/parent-a.component';
import { ChildBComponent } from './communication/parent-to-child/child-b/child-b.component';
import { ParentBComponent } from './communication/parent-to-child/parent-b/parent-b.component';
import { ChildCComponent } from './communication/viewChild/child-c/child-c.component';
import { ParentCComponent } from './communication/viewChild/parent-c/parent-c.component';
import { CpColorDirective } from './communication/viewChild/viechild.directive';
import { SideNavComponent } from './Routing/side-nav/side-nav.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { AboutComponent } from './Routing/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './Routing/users/users.component';
import { UserComponent } from './Routing/user/user.component';
import { CommonModule } from '@angular/common';
import { SidenavigationComponent } from './Routing/Navigation-routing/sidenavigation/sidenavigation.component';
import { SchoolComponent } from './Routing/Navigation-routing/school/school.component';
import { BagsComponent } from './Routing/Navigation-routing/bags/bags.component';
import { DepartmentComponent } from './Routing/Navigation-routing/department/department.component';
// import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
// import { MatButtonModule } from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserDetailsComponent } from './Routing/Navigation-routing/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EmployelistComponent,
    ChildAComponent,
    ParentAComponent,
    ChildBComponent,
    ParentBComponent,
    ChildCComponent,
    CpColorDirective,
    ParentCComponent,
    SideNavComponent,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    UserComponent,
    SidenavigationComponent,
    SchoolComponent,
    BagsComponent,
    DepartmentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule



  ],
  exports: [MatToolbarModule,MatIconModule],
  providers: [
    CommonService, UserService
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // entryComponents: [EmployeComponent]
})
export class AppModule { }

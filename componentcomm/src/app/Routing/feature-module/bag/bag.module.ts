import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagViewComponent } from './bag-view/bag-view.component';


@NgModule({
  declarations: [BagViewComponent],
  imports: [
    CommonModule,
    BagRoutingModule
  ]
})
export class BagModule { }

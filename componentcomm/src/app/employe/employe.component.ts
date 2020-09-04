import { Subject, BehaviorSubject } from 'rxjs';
import { CommonService } from './../common.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Output, Input, EventEmitter, Inject  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  requiredField = false;
  EmpForm: FormGroup;


  constructor( public dialog: MatDialog,
               private commonsevices: CommonService,
               private formBuilder: FormBuilder)
      {
    this.buildEmployeForm();
   }


 private buildEmployeForm(){
  this.EmpForm = this.formBuilder.group({
    id: [''],
    name: [''],
    isActive: ['']
  });
}


  ngOnInit(): void {

    this.commonsevices.EmployeFormData.subscribe(data => {
      if (data){
        console.log(data);
        this.EmpForm.patchValue({
          name: data.name,
        });
      }
    });
  }

  onCancle() {
    this.dialog.closeAll();
    this.commonsevices.EmployeFormData.next(undefined);
  }

  onSubmit(val: any) {
    this.commonsevices.EmployeFormData.next(val);
    this.EmpForm.reset();
    this.onCancle();
  }

}

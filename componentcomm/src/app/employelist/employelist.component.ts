import { FormBuilder } from '@angular/forms';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, EventEmitter, OnInit, Output , Input, Inject} from '@angular/core';
import { EmployeComponent } from '../employe/employe.component';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.scss']
})
export class EmployelistComponent implements OnInit {
 EmployeList = [];
  constructor(public dialog: MatDialog, private commonsevices: CommonService) {

   }

ngOnInit(): void {
    this.commonsevices.EmployeFormData.subscribe(data => {
      if (data){
        const employe = this.EmployeList.find(x => x.id === data.id);
        if(employe){
            this.EmployeList[employe] = employe;
        } else {
          this.EmployeList.push(data);

        }
      }
    });

  }
openDialog(){
    const dialogRef = this.dialog.open(EmployeComponent,
      {height: 'auto' , width: '800px'}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
onEdit(emp: any) {
  this.openDialog();
  this.commonsevices.EmployeFormData.next(emp);
  const index = this.EmployeList.findIndex(x => x.id === emp.id);
  if(index !== -1){
    this.EmployeList.splice(index, 1);
  }



  }


onDelete(id) {
    const index: number = this.EmployeList.findIndex(x => x.id === id);
    if (index !== -1){
     this.EmployeList.splice(index, 1);
}
}

}

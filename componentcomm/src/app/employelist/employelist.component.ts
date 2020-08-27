import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { EmployeComponent } from '../employe/employe.component';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.scss']
})
export class EmployelistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(EmployeComponent,
      {height: 'auto' ,width:'800px'}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

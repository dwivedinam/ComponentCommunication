import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  constructor(public dialog: MatDialog) { }

  EmpForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    isactive: new FormControl(''),

  });



  ngOnInit(): void {

    this.dropdownList = [
      { "item_id": 1, "item_text": "India" },
      { "item_id": 2, "item_text": "India" },
      { "item_id": 3, "item_text": "India" },
      { "item_id": 4, "item_text": "India" },
    ];

    // this.selectedItems = [
    //   { item_id: 2, item_text: 'Singapore' },
    //   { item_id: 3, item_text: 'Australia' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.setStatus();
  }
  setStatus() {
    (this.selectedItems.length > 0) ? this.requiredField = true : this.requiredField = false;
  }

  onItemSelect(item: any) {
    // Do something if required
    this.setClass();
  }
  onSelectAll(items: any) {
    // Do something if required
    this.setClass();
  }

  setClass() {
    this.setStatus();
    if (this.selectedItems.length > 0) { return 'validField'; }
    else { return 'invalidField'; }
  }
  submission() {
    if (this.requiredField == false) {
      /* Print a message that not all required fields were filled... */
    }
    /* Do form submission... */
  }
}

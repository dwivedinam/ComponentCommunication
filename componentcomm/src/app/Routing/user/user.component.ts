import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userDetails: any = [];
  constructor(public userService: UserService ) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {
      this.userDetails = data;
       console.log(this.userDetails);
    });


  }

}

import { UserComponent } from './../user/user.component';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:any;
  constructor(private route: ActivatedRoute , public userservice: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.userservice.getUserDetails(id).subscribe((userdetails) => {
    this.user = userdetails;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS

  displayedColumns = ["UserId", "UserName", "Firstname", "Lastname", "Email", "Mobile", "Phone"]

  constructor() { }

  ngOnInit() {
  }

}


export class User {
  UserId: number;
  UserName: string;
  Password?: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  DateOfBirth?: string;
  Mobile?: string;
  Phone?: string;
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { USERS } from '../mock-users';

import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ["UserId", "UserName", "Firstname", "Lastname", "Email", "Mobile", "Phone", "DateOfBirth"]

  dataSource = new MatTableDataSource<User>(USERS);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
    this.dataSource.paginator = this.paginator;

  }

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

import { Component, OnInit, ViewChild } from '@angular/core';
import { USERS } from '../mock-users';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ["UserId", "UserName", "Firstname", "Lastname", "Email", "Mobile", "Phone", "DateOfBirth"]

  dataSource = {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { 

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(value => this.dataSource = new MatTableDataSource<User>(value));
  }
 

  ngOnInit() {
    this.getUsers();
  }

}



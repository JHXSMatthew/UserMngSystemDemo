import { Component, OnInit, ViewChild } from '@angular/core';
import { USERS } from '../mock-users';

import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailDialog } from '../user-detail-dialog/user-detail-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ["UserId", "UserName", "Firstname", "Lastname", "Email", "Mobile", "Phone", "DateOfBirth", "Actions"]

  dataSource = []

  newUser = {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, public dialog: MatDialog) { 

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(value => this.dataSource = value);
  }

  updateUser(user): void{
    this.userService.updateUser(user)
    .subscribe(() => {
      this.dataSource = this.dataSource.map((e)=>{
        if(e.UserId === user.UserId){
          return user
        }else{
          return e
        }
      });
    });
  }

  deleteUser(user : User): void{
    this.dataSource = this.dataSource.filter(u => u!==  user)
    this.userService.deleteUser(user).subscribe();
  }

  openDialog(data, mode="create"): void {
    const dataWithMode = {
      data,
      mode
    }
    const dialogRef = this.dialog.open(UserDetailDialog, {
      width: '600px',
      data: dataWithMode,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.newUser = result;
    });
  }

 

  ngOnInit() {
    this.getUsers();
  }

}



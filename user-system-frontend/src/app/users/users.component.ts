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

  displayedColumns = ["UserID", "UserName", "Firstname", "Lastname", "Email", "Mobile", "Phone", "DateOfBirth", "Actions"]

  dataSource = new MatTableDataSource<User>()


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, public dialog: MatDialog) { 

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(value => this.dataSource.data = value);
  }

  updateUser(user): void{
    this.userService.updateUser(user)
    .subscribe(() => {
      this.dataSource.data = this.dataSource.data.map((e)=>{
        if(e.UserID === user.UserID){
          return user
        }else{
          return e
        }
      });
    });
  }

  createUser(user) : void{
    this.userService.createUser(user).subscribe((value)=>{
      console.log(value)
      if(value){
        this.dataSource.data = [...this.dataSource.data, value];
      }
    })
  }

  deleteUser(user : User): void{
    this.dataSource.data = this.dataSource.data.filter(u => u!==  user)
    this.userService.deleteUser(user).subscribe();
  }

  openDialog(data, mode="create"): void {
    const dataWithMode = {
      data: {...data},
      mode
    }
    const dialogRef = this.dialog.open(UserDetailDialog, {
      width: '600px',
      data: dataWithMode,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(mode === 'create'){
        this.createUser(result);
      }else{
        this.updateUser(result);
      }
      console.log({mode,result})
    });
  }

 

  ngOnInit() {
    this.getUsers();
  }

}



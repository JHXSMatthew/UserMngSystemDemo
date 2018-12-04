import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../users/users.component';
import { UserDetailDialog } from '../user-detail-dialog/user-detail-dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser = {}

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDetailDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.newUser = result;
    });
  }

}



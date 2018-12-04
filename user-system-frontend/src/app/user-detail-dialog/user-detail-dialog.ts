import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../users/users.component';

@Component({
  selector: 'user-detail-dialog',
  templateUrl: 'user-detail-dialog.html',
})
export class UserDetailDialog {

  constructor(
    public dialogRef: MatDialogRef<UserDetailDialog>,

    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
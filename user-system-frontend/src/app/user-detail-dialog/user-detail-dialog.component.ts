import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { User, UserDetailViewModel } from '../user';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'user-detail-dialog',
  templateUrl: 'user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css']

})
export class UserDetailDialog {

  mode="Create a new user"
  data={}
  matcher= new ValidationMatcher();

  
  constructor(
    public dialogRef: MatDialogRef<UserDetailDialog>,

    @Inject(MAT_DIALOG_DATA) public viewModel: UserDetailViewModel) {
      if(viewModel.mode === 'edit'){
        this.mode="Modify the user detail"
      }else{
        this.mode="Create a new user"
      }
      this.data = viewModel.data;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('',[
    Validators.maxLength(255),
    Validators.required,
    //[lower, digit, upper] 8+
    Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")
  ])

  userNameFormControl  = new FormControl('', [
    Validators.required
  ])

  lastNameFormControl  = new FormControl('',[
    Validators.required
  ])

  firstNameFormControl  = new FormControl('', [
    Validators.required
  ])

  
}



export class ValidationMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
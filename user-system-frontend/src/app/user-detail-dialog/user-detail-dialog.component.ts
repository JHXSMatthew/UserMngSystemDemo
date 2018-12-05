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

  loading=false
  
  constructor(
    public dialogRef: MatDialogRef<UserDetailDialog>,

    @Inject(MAT_DIALOG_DATA) public viewModel: UserDetailViewModel) {
      if(viewModel.data){
        this.data = viewModel.data;
      }

      if(viewModel.mode === 'edit'){
        this.mode="Modify the user detail"
      }else{
        this.mode="Create a new user"
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('',[
    Validators.maxLength(255),
    Validators.required,
    //[lower, digit, upper] 8+
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d].{7,}')
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
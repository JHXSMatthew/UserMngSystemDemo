import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, 
  MatCheckboxModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatDialogModule, 
  MatInputModule, 
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailDialog } from './user-detail-dialog/user-detail-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    UserDetailDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UserDetailDialog
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

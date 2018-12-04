import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailDialog } from './user-detail-dialog/user-detail-dialog';


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
    FormsModule
  ],
  entryComponents: [
    UserDetailDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

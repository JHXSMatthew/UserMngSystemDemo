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
  MatIconModule,
  ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { UserDetailDialog } from './user-detail-dialog/user-detail-dialog.component';

import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
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
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
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

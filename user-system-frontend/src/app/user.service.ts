import { Injectable } from '@angular/core';

import { User } from './user'
import { USERS } from './mock-users' 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class UserService {


  baseUrl = 'http://localhost:26129/api/users'

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap(_ => console.log('fetched users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  deleteUser(user : User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.UserId;
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    )
  }

  updateUser(user : User) : Observable<any>{
    return this.http.put(this.baseUrl, user, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.UserId}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }


  constructor(private http: HttpClient) { }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient
  ) { }

  getAllUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserDetails(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

}

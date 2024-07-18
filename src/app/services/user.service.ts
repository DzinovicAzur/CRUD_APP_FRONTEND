import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';
import { Observable, catchError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:3000/users"; // Corrected endpoint
  httpClient = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
}
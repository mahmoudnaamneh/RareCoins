import { Injectable } from '@angular/core';
import { User } from '../models/user'; // Ensure this path is correct
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = 'http://localhost:8000/users';
  headers = { 'content-type': 'application/json' };
  users: User[] = [];

  constructor(private http: HttpClient) {
    this.refreshUser();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  refreshUser(): void {
    this.getUsers().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/login/${email}/${password}`);
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/profile/${email}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/register`, user, { headers: this.headers });
  }

  deleteUser(email: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/deleteUser/${email}`);
  }

  register(email: string, password: string, fullName: string, role: string): Observable<User> {
    const user = { email, password, fullName, role };
    return this.http.post<User>(`${this.baseURL}/register`, user, { headers: this.headers });
  }
}

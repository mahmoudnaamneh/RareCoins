import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = 'http://localhost:3000/users';
  headers = { 'content-type': 'application/json' };
  users: User[] = [];
  constructor(private http: HttpClient) {
    this.refreshUser()
  } 
   getUsers():Observable<any>{
    return this.http.get(this.baseURL)
  }
  refreshUser(){
   this.getUsers().subscribe(
    (data)=>{
      this.users=data
    }
   )
  }
  login(email:string, pass:string){
    for(let user of this.users){
      if(user.email==email && user.password ==pass)
           return true
    }
      return false 
  }
  getUser(email:string){
    for(let user of this.users){
      if(user.email==email)
           return user
    }
      return null 
  }

  addUser(user:User):Observable<any>{
    let body = JSON.stringify(user)
     return this.http.post(this.baseURL,body, {headers: this.headers})
  }
  register(email:string, pass:string,name:string,male:string){
     let user = new User(email,pass,name,male)
     this.addUser(user).subscribe(
      (data)=>{
        this.refreshUser()
      }
     )
     return true
  }
}

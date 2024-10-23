// login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  constructor(private userService: UserService, private router:Router ,private builder:FormBuilder) {
    this.loginForm=this.builder.group({
      email :new FormControl('',[Validators.email,Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }

  ngOnInit():void{}

  login(){
    let mail = this.loginForm.value.email
    let pass = this.loginForm.value.password
    if(this.userService.login(mail,pass)){
      sessionStorage.setItem('user',mail)
      this.router.navigateByUrl('profile/user')
    }
    else
      alert("not found")
  }
}

// register.component.ts

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !:FormGroup
  constructor(private userService: UserService, private router:Router ,private builder:FormBuilder){
    this.registerForm=this.builder.group({
      name: ['',Validators.required],
      email :['',Validators.compose([Validators.required,Validators.email])],
      password :['',Validators.required],
      gender :['',Validators.required]
    })
  }
  ngOnInit(): void {
  }
  register(){
    let mail =this.registerForm.value.email
    let pass=this.registerForm.value.password
    let name = this.registerForm.value.name
    let gender = this.registerForm.value.gender
    let res = this.userService.register(mail,pass,name,gender)
    if(!res) {
      alert("error")
    }
    else{
      alert("new user inserted")
      this.router.navigateByUrl('profile')
    }
  }
}

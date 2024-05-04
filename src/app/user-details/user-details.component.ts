// user-details.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  image : string=""
  fullname :string=""
  gender :string=""
  email !:any
  constructor(private userService:UserService) {
    this.email =sessionStorage.getItem('user')
    if(this.email!=null){
    let user = this.userService.getUser(this.email)
    if(user !=null){
      this.image=user.image
      this.fullname=user.name
      this.gender=user.gender
    }
   }
   else{
    this.email=""
   }
  }
    
  ngOnInit(): void {
    
  }
}

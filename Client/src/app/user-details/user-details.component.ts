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
  image: string = "";
  fullname: string = "";
  gender: string = "";
  email: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('user');
    if (this.email) {
      this.userService.getUser(this.email).subscribe(user => {
        if (user) {
          this.image = user.image;
          this.fullname = user.name;
          this.gender = user.gender;
        }
      }, error => {
        console.error('Error fetching user details:', error);
      });
    }
  }
}

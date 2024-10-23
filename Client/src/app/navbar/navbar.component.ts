import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean=false

  constructor(private router:Router){

  }
  ngOnInit(): void{
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(sessionStorage.getItem('user')){
          this.loggedIn=true
        }
      }
    })
  }
  logout(){
    this.loggedIn=false
    sessionStorage.removeItem('user')
    this.router.navigateByUrl('profile')
  }
}


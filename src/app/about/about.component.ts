import { getLocaleWeekEndRange } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name1="name: mahmoud naamneh";
  id1="id: 322476813";
  email1="email: mahmoudnaamneh5@gmail.com";
  jobTitle1= "job title: software dev";

  name2="name: mohamed kanaaneh";
  id2="id: 465125877";
  email2="email: mohamedkanaaneh@gmail.com";
  jobTitle2= "job title: software dev";
  
  buttontitle="Dark";
  color="black";
  bgcolor="lightgray";

  changeColor(){
    if(this.buttontitle=='Bright'){
      this.bgcolor='lightgray';
      this.color='black';
      this.buttontitle='Dark'
    } else{
      this.color='lightgray';
      this.bgcolor='black';
      this.buttontitle='Bright'
    }
  }  
}

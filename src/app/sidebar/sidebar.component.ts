import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() selectcoin:EventEmitter<string>=new EventEmitter()
  all(){
    this.selectcoin.emit("all")

  }
  bronze(){
    this.selectcoin.emit("bronze")
  }
  silver(){
    this.selectcoin.emit("silver")

  }
  gold(){
    this.selectcoin.emit("gold")

  }
}

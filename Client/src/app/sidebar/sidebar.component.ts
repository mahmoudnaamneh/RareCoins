import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() selectcoin: EventEmitter<string> = new EventEmitter<string>();

  all() {
    this.selectcoin.emit('All');
  }

  bronze() {
    this.selectcoin.emit('Bronze');
  }

  silver() {
    this.selectcoin.emit('Silver');
  }

  gold() {
    this.selectcoin.emit('Gold');
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() users: any;
  @Output() removeUserData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }
  removeUser(i: number) {
    this.removeUserData.emit(i);
  }
}

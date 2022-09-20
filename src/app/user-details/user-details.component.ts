import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() userData: any;
  @Input() userIndex: number = 0;
  @Output() removeUserData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }
  removeUser() {
    this.removeUserData.emit(this.userIndex);
  }
}

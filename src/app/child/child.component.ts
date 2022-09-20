import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  newUser: string = '';
  @Input() user: string = '';
  @Output() sendToParent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
  toParent() {
    this.sendToParent.emit(this.newUser);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  userData: string = 'this is parent data';
  newUserDatas: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}
  fromChild(event: any) {
    console.log(event);
    // this.newUserData = event;
    this.newUserDatas.push(event);
  }
}

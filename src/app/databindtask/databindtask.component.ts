import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindtask',
  templateUrl: './databindtask.component.html',
  styleUrls: ['./databindtask.component.scss'],
})
export class DatabindtaskComponent implements OnInit {
  userName: string = '';
  isDisable: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  clearInput() {
    this.userName = '';
    this.isDisable = true;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindtask',
  templateUrl: './databindtask.component.html',
  styleUrls: ['./databindtask.component.scss'],
})
export class DatabindtaskComponent implements OnInit {
  username: string = '';
  isDisable: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  clearInput() {
    this.username = '';
    this.isDisable = true;
  }
  enableBtn(event: any) {
    if (event.target.value != '') {
      this.isDisable = false;
    } else {
      this.isDisable = true;
    }
  }
}

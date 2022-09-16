import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent implements OnInit {
  userData: any = '';
  data: string = 'This is Main Area';
  bindData: string = '';
  inputData: string = '';
  isDisable: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  userInput(event: any) {
    this.userData = event.target.value;
    console.log(this.userData);
  }
  databind(event: any) {
    this.bindData = event.target.value;
  }
  onBtnClick() {
    this.isDisable = !this.isDisable;
  }
  enable() {
    this.isDisable = false;
  }
}

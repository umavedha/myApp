import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent implements OnInit {
  taskName: string = '';
  @Output() addNewTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  addTask() {
    console.log(this.taskName);
    this.addNewTask.emit(this.taskName);
    this.taskName = '';
  }
}

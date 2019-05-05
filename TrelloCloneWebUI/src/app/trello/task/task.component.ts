import { Component, OnInit, Input } from '@angular/core';
import { TaskViewModel } from 'src/app/swagger/model/taskViewModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  _task: TaskViewModel
  @Input()
  set task (value: TaskViewModel) {
    if (value) {
      this._task = value;
    }
  }

  ngOnInit() {
  }

}

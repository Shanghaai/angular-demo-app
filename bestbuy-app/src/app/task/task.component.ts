import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: string[];
  constructor(private _taskService: TaskServiceService) { }

  ngOnInit() {

    this.tasks = this._taskService.getAlltask();
  }





}

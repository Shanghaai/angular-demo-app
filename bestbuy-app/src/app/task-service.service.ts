import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  taskList: string[];

  constructor() {

  }

  getAlltask() {

    return this.taskList = ['football', 'study', 'cricket', 'tea-time'];

  }


}

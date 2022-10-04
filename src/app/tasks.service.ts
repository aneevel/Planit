import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = [
    new Task(1, 
      "Wash the dishes", 
      "Dishes are piling up everywhere! Wash all the dishes to the side of the sink", 
      "red", 
      "homecare", 
      15, 
      new Date(2022, 10, 1),
      new Date(2022, 10, 2),
      false
    ),
    new Task(2, 
      "Practice guitar", 
      "Go through your normal 1.5 hour guitar practice routine.", 
      "red", 
      "hobbies", 
      50, 
      new Date(2022, 10, 1),
      new Date(2022, 10, 1),
      true
    ),
    new Task(3, 
      "Pay credit card bill", 
      "Make the monthly payment to credit card company", 
      "green", 
      "bills", 
      25, 
      new Date(2022, 10, 1),
      new Date(2022, 10, 30),
      false
    ),

  ];

  constructor() { }

  public getTasks() : Array<Task> {
    return this.tasks;
  }

  public createTask(task: Task) {
    this.tasks.push(task);
  }
}

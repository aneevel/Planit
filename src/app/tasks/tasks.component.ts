import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<Task> = {};

  constructor(public tasksService: TasksService) { 
    this.tasks = this.tasksService.getTasks();
  }

  ngOnInit(): void {}
  

}

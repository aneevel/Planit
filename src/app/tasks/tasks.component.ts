import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<{id: number, short_description: string, long_description: string, priority: string, category: string, points: number, created_date: Date, due_date: Date, recurring: boolean}>;

  constructor(public tasksService: TasksService) { 
    this.tasks = this.tasksService.getTasks();
  }

  ngOnInit(): void {}
  

}

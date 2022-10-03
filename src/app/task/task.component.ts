import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task!: {id: number, short_description: string, long_description: string, priority: string, category: string, points: number, created_date: Date, due_date: Date, recurring: boolean};

}

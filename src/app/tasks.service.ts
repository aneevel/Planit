import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = [
    { id: 1, 
      short_description: "Wash the dishes", 
      long_description: "Dishes are piling up everywhere! Wash all the dishes to the side of the sink", 
      priority: "red", 
      category: "homecare", 
      points: 15, 
      created_date: new Date(2022, 10, 1),
      due_date: new Date(2022, 10, 2),
      recurring: false
    },
    { id: 2, 
      short_description: "Practice guitar", 
      long_description: "Go through your normal 1.5 hour guitar practice routine.", 
      priority: "red", 
      category: "hobbies", 
      points: 50, 
      created_date: new Date(2022, 10, 1),
      due_date: new Date(2022, 10, 1),
      recurring: true
    },
    { id: 3, 
      short_description: "Pay credit card bill", 
      long_description: "Make the monthly payment to credit card company", 
      priority: "green", 
      category: "bills", 
      points: 25, 
      created_date: new Date(2022, 10, 1),
      due_date: new Date(2022, 10, 30),
      recurring: false
    },

  ];

  constructor() { }

  public getTasks() : Array<{id: number, short_description: string, long_description: string, priority: string, category: string, points: number, created_date: Date, due_date: Date, recurring: boolean}> {
    return this.tasks;
  }

  public createTask(task: { id: number, short_description: string, long_description: string, priority: string, category: string, points: number, created_date: Date, due_date: Date, recurring: boolean }) {
    this.tasks.push(task);
  }
}

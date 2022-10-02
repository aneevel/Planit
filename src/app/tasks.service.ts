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
      created_date: "2022-10-01",
      due_date: "2022-10-03",
      recurring: false
    },
    { id: 2, 
      short_description: "Practice guitar", 
      long_description: "Go through your normal 1.5 hour guitar practice routine.", 
      priority: "red", 
      category: "hobbies", 
      points: 50, 
      created_date: "2022-10-01",
      due_date: null,
      recurring_: true
    },
    { id: 3, 
      short_description: "Pay credit card bill", 
      long_description: "Make the monthly payment to credit card company", 
      priority: "green", 
      category: "bills", 
      points: 25, 
      created_date: "2022-10-01",
      due_date: "2022-10-30"
    },

  ];

  constructor() { }
}

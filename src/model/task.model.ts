export class Task {
    private id: number;
    private short_description: string;
    private long_description: string;
    private priority: string;
    private category: string;
    private points: number;
    private created_date: Date;
    private due_date: Date;
    private recurring: boolean;

    constructor(id: number, 
        short_description: string, 
        long_description: string, 
        priority: string, 
        category: string, 
        points: number, 
        created_date: Date, 
        due_date: Date, 
        recurring: boolean)
    {
        this.id = id;
        this.short_description = short_description;
        this.long_description = long_description;
        this.priority = priority;
        this.category = category;
        this.points = points;
        this.created_date = created_date;
        this.due_date = due_date;
        this.recurring = recurring;
    }
}
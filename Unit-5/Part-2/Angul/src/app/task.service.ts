import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  status: string;
}

@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class TaskService {
  // Using BehaviorSubject to reactively update components when data changes
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() {}

  // READ
  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // CREATE
  addTask(task: Omit<Task, 'id'>) {
    const newTask = { ...task, id: Date.now() };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }

  // UPDATE
  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next([...this.tasks]);
    }
  }

  // DELETE
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.tasksSubject.next([...this.tasks]);
  }
}
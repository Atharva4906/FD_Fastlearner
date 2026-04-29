import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  taskForm: FormGroup;
  tasks: Task[] = [];
  editingTaskId: number | null = null;

  // Dependency Injection happens here in the constructor
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  ngOnInit() {
    // Subscribe to our service to get real-time data updates
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  onSubmit() {
    if (this.taskForm.invalid) return;

    if (this.editingTaskId) {
      // Update existing task
      this.taskService.updateTask({
        id: this.editingTaskId,
        ...this.taskForm.value
      });
      this.editingTaskId = null;
    } else {
      // Create new task
      this.taskService.addTask(this.taskForm.value);
    }
    
    this.taskForm.reset({ status: 'Pending' });
  }

  editTask(task: Task) {
    this.editingTaskId = task.id;
    this.taskForm.patchValue({
      title: task.title,
      status: task.status
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
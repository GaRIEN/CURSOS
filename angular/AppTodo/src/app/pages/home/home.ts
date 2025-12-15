import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private fb = inject(FormBuilder);
  
  // LISTA
  tasks = signal<Task[]>([
    {
      id: '1',
      name: 'aprender angular',
      description: 'aprender curso basico luego dominaras',
      status: 'pendiente',
      fechaLimite: new Date(2025, 0, 20)
    },
    {
      id: '2',
      name: 'aprender ingles',
      description: 'Empezar desde 0',
      status: 'proceso',
      fechaLimite: new Date(2025, 1, 5)
    }
  ]);

  // MODAL
  showModal = signal(false);

  // FORMULARIO REACTIVO
  taskForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required]
  });

  
  saveTask() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched(); // muestra errores
      return;
    }

    this.tasks.update(t => [
      ...t,
      {
        id: crypto.randomUUID(),
        ...this.taskForm.value as any,
        fechaLimite: new Date()
      }
    ]);

    this.taskForm.reset();
    this.showModal.set(false);
  }

  deleteTask(id: string) {
    this.tasks.update(t => t.filter(item => item.id !== id));
  }
}

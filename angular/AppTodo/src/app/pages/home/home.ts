import { Component, inject, signal, computed } from '@angular/core';
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
  editingTaskId = signal<string | null>(null);


  // FORMULARIO REACTIVO
  taskForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required]
  });

  editTask(task: Task) {
    this.editingTaskId.set(task.id);

    this.taskForm.patchValue({
      name: task.name,
      description: task.description,
      status: task.status
    });

    this.showModal.set(true);
  }
  taskCompleted(id: string): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, status: 'completado' }
          : task
      )
    );

  }


  saveTask() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formValue = this.taskForm.value as any;

    // EDITAR
    if (this.editingTaskId()) {
      this.tasks.update(tasks =>
        tasks.map(task =>
          task.id === this.editingTaskId()
            ? { ...task, ...formValue }
            : task
        )
      );
    }
    // CREAR
    else {
      this.tasks.update(t => [
        ...t,
        {
          id: crypto.randomUUID(),
          ...formValue,
          fechaLimite: new Date()
        }
      ]);
    }

    this.closeModal();
  }

  closeModal() {
    this.taskForm.reset();
    this.editingTaskId.set(null);
    this.showModal.set(false);
  }

  deleteTask(id: string) {
    this.tasks.update(t => t.filter(item => item.id !== id));
  }

  //PARA FILTROS 

  // FILTRO ACTIVO
  filterStatus = signal<'all' | 'pendiente' | 'proceso' | 'completado'>('all');

  filteredTasks = computed(() => {
    const status = this.filterStatus();
    const tasks = this.tasks();

    if (status === 'all') {
      return tasks;
    }

    return tasks.filter(task => task.status === status);
  });

  setFilter(status: 'all' | 'pendiente' | 'proceso' | 'completado'): void {
    this.filterStatus.set(status);
  }


}

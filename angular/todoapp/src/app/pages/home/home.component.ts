import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern('^\\S.*$'),
      Validators.minLength(3),
      Validators.maxLength(50),
    ],
  });
  tasks = signal<task[]>([
    { id: 11, title: 'instalar angular', completed: true },
    { id: 2, title: 'crear componentes', completed: false },
    { id: 32, title: 'crear servicios', completed: false },
    { id: 4, title: 'crear rutas', completed: false },
    { id: 5, title: 'crear pipes', completed: false },
    { id: 6, title: 'crear directivas', completed: false },
    { id: 7, title: 'crear guardas', completed: false },
    { id: 8, title: 'crear interceptores', completed: false },
    { id: 9, title: 'crear modulos', completed: false },
    { id: 100, title: 'crear lazy loading', completed: false },
  ]);

  handleChange() {
    //traemos lo que tenemos y agreamo lo nuevo
    if (this.newTaskControl.valid) {
      const value = this.newTaskControl.value;
      this.addtask(value);
      this.newTaskControl.setValue('');
    } else {
      this.newTaskControl.markAsTouched();
      return; // No continúa
    }
  }

  addtask(title: string) {
    let newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [newTask, ...tasks]);
  }

  deletetask(id: number) {
    console.log(id);
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
  toggleChecked(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
}

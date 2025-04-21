import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filters, task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Filters = Filters;
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
    { id: 11, title: 'instalar angular', completed: false },
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

  filter = signal<Filters>(Filters.All);

  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();
    const filterMap: Record<Filters, () => task[]> = {
      [Filters.Completed]: () => tasks.filter((task) => task.completed),
      [Filters.Pending]: () => tasks.filter((task) => !task.completed),
      [Filters.All]: () => tasks,
    };
    return filterMap[filter]();
  });

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
      editing: false,
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

  editTask(id: number) {
    console.log(id);
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  }
  updateTask(event: Event, id: number) {
    const newtitle = (event.target as HTMLInputElement).value;
    this.newTaskControl.setValue(newtitle);
    const isvalid = this.newTaskControl.valid;
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: isvalid ? newtitle.trim() : task.title,
              editing: false,
            }
          : task
      )
    );
  }

  changeFilter(filter: Filters) {
    this.filter.set(filter);
  }
}

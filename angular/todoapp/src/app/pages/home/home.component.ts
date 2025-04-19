import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal(['instalar angular', 'crear componentes']);

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    //traemos lo que tenemos y agreamo lo nuevo
    this.tasks.update((tasks) => [...tasks, target.value]);
  }

  deletetask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task, index) => index !== id));
  }
}

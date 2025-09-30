import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppTodo');
  welcome ='Hola';
  tasks = [
    'instalar angular',
    'crear el proyecto',
    'crear componentes'
  ]

 
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  tasks = signal([
    {
      name: "aprender angular",
      description:"aprender curso basico luego dominaras",
      status:"pendiente"
    },
    {
      name: "aprender ingles",
      description: "Empezar desde 0",
      status: "proceso"
    },

  ])
}

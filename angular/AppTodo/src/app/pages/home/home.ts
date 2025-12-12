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
      id:"1",
      name: "aprender angular",
      description: "aprender curso basico luego dominaras",
      status: "pendiente"
    },
    {
      id: "2",
      name: "aprender ingles",
      description: "Empezar desde 0",
      status: "proceso"
    },

  ])

  //PARA MODAL 
  showModal = signal(false);
  // Valores reactivos (signals)
  newName = signal('');
  newDescription = signal('');
  newStatus = signal('Pendiente');

  saveTask() {
    
    this.tasks.update(t => [
      ...t,
      {
        id: this.generateId(),
        name: this.newName(),
        description: this.newDescription(),
        status: this.newStatus()
      }
    ]);
    // Reset
    this.newName.set('');
    this.newDescription.set('');
    this.newStatus.set('Pendiente');

    this.showModal.set(false);
  }

  generateId() {
    return crypto.randomUUID();
  }

  deleteTask(id: string) {
    this.tasks.update(t => t.filter(item => item.id !== id));
  }


}

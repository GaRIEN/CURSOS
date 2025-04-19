import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'hola desde component';
  tasks = ['instalar angular', 'crear componentes'];
  name = signal('jose');
  names = {
    id: 15,
    name: 'jose',
    lastName: 'perez',
    age: 25,
  };
  desabilitado = true;
  imagen = 'https://angular.io/assets/images/logos/angular/angular.png';

  imprimir() {
    console.log('hola desde el componente');
    this.tasks.push('nueva tarea');

    return console.log(this.tasks);
  }
  dobleclick() {
    console.log('los nuevos datos');
  }
  handleChange(event: Event) {
    console.log(event);
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
  handleKeydown(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
  escuchandosignal(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name.set(target.value);
  }
}

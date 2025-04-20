import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
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

  //para formularios
  colorcontrol = new FormControl();
  constructor() {
    this.colorcontrol.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
  //clases
  nameControl = new FormControl('20', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });
}

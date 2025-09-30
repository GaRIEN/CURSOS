import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hola';
  tasks = [
    'instalar angular',
    'crear el proyecto',
    'crear componentes'
  ]
}

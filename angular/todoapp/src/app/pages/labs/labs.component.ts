import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola desde component';
  tasks=[
    'instalar angular',
    'crear componentes',
  ]
  names={
    id:15
    name:'jose',
    lastName:'perez',
    age:25
  }
  desabilitado=true
  imagen="https://angular.io/assets/images/logos/angular/angular.png"

  imprimir(){
    console.log('hola desde el componente')
     this.tasks.push('nueva tarea')

    return console.log(this.tasks);
  }
  dobleclick(){
    console.log("los nuevos datos");
  }

}

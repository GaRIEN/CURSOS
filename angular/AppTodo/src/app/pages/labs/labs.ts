import { Component, signal } from '@angular/core';

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
  ];
  name = signal("gabriel") ;
  edad=28;
  persona={
    name:"garien",
    edad:27

  }
  clickHandler(){
    alert("holas")
  }

  changeHandler(Event:Event){
    alert("evento change")
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }
  
  inputHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }

}

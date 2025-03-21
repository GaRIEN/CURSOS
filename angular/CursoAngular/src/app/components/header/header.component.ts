import { Component, input, output } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import product from '../../models/Productus';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgClass, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: string = 'ANGEL';
  numero: number = 0;
  condicion: boolean = false;

  Cont() {
    this.numero++;
  }
  DisCont() {
    this.numero--;
  }

  frutas: string[] = ['platano', 'manzana', 'pera'];

  paises: any = [
    {
      id: 1,
      nombre: 'Argentina',
      capital: 'Buenos Aires',
      bandera: 'https://flagcdn.com/w320/ar.png',
    },
    {
      id: 2,
      nombre: 'Brasil',
      capital: 'Brasilia',
      bandera: 'https://flagcdn.com/w320/br.png',
    },
    {
      id: 3,
      nombre: 'Canadá',
      capital: 'Ottawa',
      bandera: 'https://flagcdn.com/w320/ca.png',
    },
    {
      id: 4,
      nombre: 'España',
      capital: 'Madrid',
      bandera: 'https://flagcdn.com/w320/es.png',
    },
    {
      id: 5,
      nombre: 'Francia',
      capital: 'París',
      bandera: 'https://flagcdn.com/w320/fr.png',
    },
    {
      id: 6,
      nombre: 'Alemania',
      capital: 'Berlín',
      bandera: 'https://flagcdn.com/w320/de.png',
    },
    {
      id: 7,
      nombre: 'México',
      capital: 'Ciudad de México',
      bandera: 'https://flagcdn.com/w320/mx.png',
    },
    {
      id: 8,
      nombre: 'Perú',
      capital: 'Lima',
      bandera: 'https://flagcdn.com/w320/pe.png',
    },
    {
      id: 9,
      nombre: 'Estados Unidos',
      capital: 'Washington D.C.',
      bandera: 'https://flagcdn.com/w320/us.png',
    },
    {
      id: 10,
      nombre: 'Japón',
      capital: 'Tokio',
      bandera: 'https://flagcdn.com/w320/jp.png',
    },
  ];

  // @Input() msg: string = '';
  msg = input<string>('');
  // @Input() personas: any[] = [];
  personas = input<any>();

  //es para comunicar hijo a padre

  // @Output() login: EventEmitter<any> = new EventEmitter<any>();
  //modificamos para que sea mas entendible
  login = output<any>();

  userName: string = 'DR MICHI';

  handleLogin() {
    this.login.emit(this.userName);
  }

  //CONSTRUCTORES y MODELOS INTERFACES

  gato: string = '';
  product: product;
  // constructor() {
  //   this.gato = 'llama';
  //   this.product = {
  //     name: 'computer',
  //     price: 1000,
  //     isForsale: true,
  //   };
  // }

  isDark: boolean = false;

  toggleDark() {
    this.isDark = !this.isDark;
  }

  //FORMULARIOS

  movieForm: FormGroup; //para el formulario
  //para los campos
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.gato = 'llama';
    this.product = {
      name: 'computer',
      price: 1000,
      isForsale: true,
    };

    //para los formularios

    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }

  handleSubmit(): void {
    console.log(this.movieForm.value);
  }
}

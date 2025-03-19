import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
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

  @Input() msg: string = '';
  @Input() personas: any[] = [];
}

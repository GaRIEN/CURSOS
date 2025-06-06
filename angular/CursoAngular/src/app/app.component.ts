import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CursoAngular';
  mensaje: string = 'HOLA MENSAJE DESDE EL PADRE';
  personas: any = [
    {
      nombre: 'Angel gabriel',
      apellido: 'huaman',
      edad: 25,
    },
  ];

  userName: string = '';
  setUserName(e: any) {
    console.log('Recibido en el padre:', e);
    this.userName = e;
  }
}

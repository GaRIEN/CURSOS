import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form-pages',
  imports: [HeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './movie-form-pages.component.html',
  styleUrl: './movie-form-pages.component.css',
})
export class MovieFormPagesComponent {
  //formularios
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;
  constructor(public movieServices: MovieService) {
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
    this.movieServices.addMovie(this.movieForm.value);
    //para limpiar formularios
    this.movieForm.reset();
  }
}

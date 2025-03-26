import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [
      {
        name: 'la era del hielo',
        duration: 250,
        director: 'alguien que no se ',
      },
      {
        name: 'kun fu panda',
        duration: 300,
        director: 'jack de no se que',
      },
    ];
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}

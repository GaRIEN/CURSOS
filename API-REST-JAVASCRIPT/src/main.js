import { API_KEY } from "./secrets.mjs";
document.addEventListener('DOMContentLoaded',()=>{
    getTrendingMoviesPreview();
})

async function getTrendingMoviesPreview() {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
    );
    const data = await res.json();
    const movies = data.results;
    const containerpeliculas = document.getElementById("show-peliculas");
    movies.forEach((movie) => {
      const moviehtml = `
            <div class="show__peliculas-pelicula">
              <figure>
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}">
              </figure>
              <h3 class="fs-6 mt-3 text-center text-light">${movie.title}</h3>
            </div>
          `;
      containerpeliculas.insertAdjacentHTML("beforeend", moviehtml);
    });
  }
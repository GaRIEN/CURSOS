import { API_KEY } from "./secrets.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");

  let isDown = false;
  let startX;
  let scrollLeft;
  // images.forEach((img) => {
  //   img.addEventListener('dragstart', (e) => e.preventDefault());
  // });

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  getTrendingMoviesPreview();
  getCategoriasMovies();
  getTopRated()
});

//solicitud de peliculas que estan en tend son por dias
async function getTrendingMoviesPreview() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
  );
  const data = await res.json();
  const movies = data.results;
  console.log(movies);
  const containerpeliculas = document.getElementById("carousel");
  movies.forEach((movie) => {
    const moviehtml = `
            <a href="" class="d-inline-block text-decoration-none">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w200${movie.poster_path}"
                  alt="${movie.title}"
                  class="rounded"
                />
              </figure>
              <div class="series-informacion">
                <h3 class="fs-6 text-center text-light">${movie.title}</h3>
                <p class="text-center">${movie.release_date}</p>
              </div>
            </a>

          `;
    containerpeliculas.insertAdjacentHTML("beforeend", moviehtml);
  });
}

//solicitud de categorias de peliculas
async function getCategoriasMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
  );
  const categorias = await res.json();
  const genero = categorias.genres;

  const generopeliculas = document.getElementById("generopeliculas");
  const cantidad = Math.ceil(genero.length / 2);
  const columna1 = genero.slice(0, cantidad);
  const columna2 = genero.slice(cantidad);
  const column1Html = `
  <div class="col-6">
    ${columna1
      .map(
        (genre) =>
          `<li><a class="dropdown-item text-white" href="#">${genre.name}</a></li>`
      )
      .join("")}
  </div>
`;
const column2Html = `
<div class="col-6">
  ${columna2
    .map(
      (genre) =>
        `<li><a class="dropdown-item text-white" href="#">${genre.name}</a></li>`
    )
    .join("")}
</div>
`;
generopeliculas.innerHTML = column1Html +  column2Html;

}

//solicitud de para traer peliculas mas vistas
async function getTopRated() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=" + API_KEY
  );
  // fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  const data = await res.json();
  const movies = data.results;
  console.log('Esta es la ruta que traerá las películas mejor valoradas');
  console.log(movies);

  
  const containerpeliculas = document.getElementById("show-peliculas");
  movies.forEach((movie) => {
    const moviehtml = `
              <div class="show__peliculas-pelicula">
                <figure>
                  <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.original_title
                }">
                </figure>
                <h3 class="fs-6 mt-3 text-center text-light">${movie.original_title
                }</h3>
              </div> 
          `;
    containerpeliculas.insertAdjacentHTML("beforeend", moviehtml);
  });
}

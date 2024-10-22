import { API_KEY } from "./secrets.mjs";


document.addEventListener('DOMContentLoaded',()=>{
  const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');

let isDown = false;
let startX;
let scrollLeft;
// images.forEach((img) => {
//   img.addEventListener('dragstart', (e) => e.preventDefault());
// });

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;  
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; 
  carousel.scrollLeft = scrollLeft - walk;
});

  

    getTrendingMoviesPreview();

})

async function getTrendingMoviesPreview() {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
    );
    const data = await res.json();
    const movies = data.results;
    console.log(movies)
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


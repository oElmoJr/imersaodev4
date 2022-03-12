const API_KEY = "api_key=98e41bd4379f1435ff4533b935367e7d";
const BASE_URL = "https://api.themoviedb.org/4";
const API_URL =
  BASE_URL +
  "/discover/movie?sort_by=popularity.desc&" +
  API_KEY +
  "&language=pt-BR";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY + "&language=pt-BR";

const popularContainer = document.getElementById("items2");
const myListContainer = document.getElementById("items");

const search = document.getElementById("search");
const form = document.querySelector("#form");

let minhaListaFilmes = [];

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  popularContainer.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("item");
    movieEl.innerHTML = `
    <img src="${IMG_URL + poster_path}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${title}</h3>
    </div>
    <button class="btn" onclick='adicionar("${title}", "${poster_path}")'>+</button>
    `;

    popularContainer.appendChild(movieEl);
  });
}

function myList(filme) {
  myListContainer.innerHTML = "";

  if (minhaListaFilmes.indexOf(filme) === -1) {
    minhaListaFilmes.push(filme);
  }

  console.log(minhaListaFilmes);
  console.log(filme);

  minhaListaFilmes.forEach((filme) => {
    const { titulo, img } = filme;
    const filmeEl = document.createElement("div");
    filmeEl.classList.add("item");
    filmeEl.innerHTML = `
    <img src="${img}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${titulo}</h3>
    </div>
    `;

    myListContainer.appendChild(filmeEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCH_URL + "&query=" + searchTerm);
  }
});

function adicionar(title, poster) {
  let filme = {
    titulo: title,
    img: IMG_URL + poster,
  };

  myList(filme);
}

document.querySelector("#items").addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    e.target.scrollBy(300, 0);
  } else {
    e.target.scrollBy(-300, 0);
  }
});

document.querySelector("#items2").addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    e.target.scrollBy(300, 0);
  } else {
    e.target.scrollBy(-300, 0);
  }
});

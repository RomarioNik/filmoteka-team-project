import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';

const liEl = document.querySelector('.card-list__item');
const modalEl = document.querySelector('.modal-movie');
const api = new ThemoviedbAPI();

export const hendlerClickCard = evt => {
  // проверяю, клик по карточке или нет.
  if (evt.currentTarget.nodeName != 'LI') {
    return;
  }
  // открывает модальное окно!
  const instance = BasicLightBox.create(`<div class="modal-movie"></div>`);
  instance.show();
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow(data) {
  return `
  
  <img src="https://image.tmdb.org/t/p/w400${data.poster_path}" class=""modal-movie__img />
  <h2>${data.original_title}</h2>
  <p>Vote/Votes<b>${data.vote_average} / ${data.vote_count}</b></p>
  <p>popularity <b>${data.popularity}</b></p>
  <p>original_title<b>${data.original_title}</b></p>
  <p>genres<b></b></p>
  <h3>About</h3>
  <p>${data.overview}</p>
  <div>
  <button type="button">add to Watched</button>
  <button type="button">add to queue</button>
  </div>
  
  `;
}

liEl.addEventListener('click', hendlerClickCard);

function getMovieId(id) {
  api.movie_id = id;
  api
    .getMovieDetails()
    .then(({ data }) => {
      console.log(createModalWindow(data));
    })
    .catch(err => console.warn(err));
}
getMovieId(920);

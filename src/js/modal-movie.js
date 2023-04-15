import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';
const liEl = document.querySelector('.card-list__item');

export const hendlerClickCard = evt => {
  // проверяю, клик по карточке или нет.
  if (evt.currentTarget.nodeName != 'LI') {
    return;
  }
  modalIsOpen();
  // открывает модальное окно!
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow(data) {
  return `
  
  <img src="https://image.tmdb.org/t/p/w400${data.poster_path}" class="modal-movie__img" alt="${data.original_title}" />
  <h2 class="modal-movie__title">${data.original_title}</h2>
  <div class="modal-movie__wrap-text">
  <p>Vote/Votes<b>${data.vote_average} / ${data.vote_count}</b></p>
  <p>popularity<b>${data.popularity}</b></p>
  <p>original_title<b>${data.original_title}</b></p>
  <p>genres<b></b></p>
  </div>
  <h3 class="modal-movie__about">About</h3>
  <p>${data.overview}</p>
 
  <button type="button" class="modal-movie__Watch">add to Watched</button>
  <button type="button" class="modal-movie__queue">add to queue</button>
  
  
  `;
}

function getDateFromId(id) {
  const api = new ThemoviedbAPI();
  const modalEl = document.querySelector('.modal-movie');
  api.movie_id = id;
  api
    .getMovieDetails()
    .then(({ data }) => {
      console.log(modalEl);
      modalEl.insertAdjacentHTML('afterbegin', createModalWindow(data));
    })
    .catch(err => console.warn(err));
}

function modalIsOpen() {
  const instance = BasicLightBox.create('<div class="modal-movie"></div>');
  instance.show();

  getDateFromId(920);
}
liEl.addEventListener('click', hendlerClickCard);

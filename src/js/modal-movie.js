import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';
import { ulAdd } from './modal-dorabotka';
 const ulEll = document.querySelector('.film__gallery')
export const hendlerClickCard = event => {
  // проверяю, клик по карточке или нет.
  if (event.target.nodeName !== 'UL') {
    let idLi = event.target.dataset.id
    modalIsOpen(idLi);
    }
  // открывает модальное окно
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow(data) {
  return `
  <button class="close-button-modal" type='button' width="20" height="20 font-size="20">
X
</button>

  <img src="https://image.tmdb.org/t/p/w400${
    data.poster_path
  }" class="modal-movie__img" alt="${data.original_title}" />
  <h2 class="modal-movie__title">${data.original_title}</h2>
  <div class="modal-movie__wrap">
    <div class="modal-movie__wrap-key">
    <p>Vote/Votes</p>
    <p>popularity</p>
    <p>original_title</p>
    <p>genres</p>
     </div>
     <div class="modal-movie__wrap-value">
    <p><span>${data.vote_average.toFixed(1)}</span> / ${data.vote_count}</p>
    <p>${data.popularity.toFixed(1)}</p>
    <p>${data.original_title}</p>
    <p></p>
   </div>
  </div>
  <h3 class="modal-movie__about">About</h3>
  <p class="modal-movie__desc">${data.overview}</p>
 <div class="modal-movie__btn-wrap">
  <button type="button" class="modal-movie__Watch">add to Watched</button>
  <button type="button" class="modal-movie__queue">add to queue</button>
  </div>
  
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

function modalIsOpen(ids) {
  const instance = BasicLightBox.create('<div class="modal-movie"></div>');
  instance.show();
  getDateFromId(ids);
}
ulEll.addEventListener('click', hendlerClickCard);
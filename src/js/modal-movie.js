import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';
import { ulAdd } from './modal-dorabotka';
import { changeGenresLength } from './change-genres-length';

const ulEll = document.querySelector('.film__gallery');

export const hendlerClickCard = event => {
  // проверяю, клик по карточке или нет.
  if (event.target.nodeName !== 'UL') {
    let idLi = event.target.dataset.id;
    modalIsOpen(idLi);
  }
  // открывает модальное окно
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow(data) {
  return `
<button class="modal-movie__btn-close" data-close type='button' > 
<svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 8L22 22" stroke="black" stroke-width="2"></path>
        <path d="M8 22L22 8" stroke="black" stroke-width="2"></path>
      </svg>
</button> 

 
  <img src="https://image.tmdb.org/t/p/w400${
    data.poster_path
  }" class="modal-movie__img" alt="${data.original_title}" /> 
 <div class="movie-modal__content">
    <h2 class="modal-movie__title">${data.original_title}</h2> 
  <ul class=modal-movie__list>
  <li class="movie-modal__list-item"><p>Vote/Votes</p><span class="active">${data.vote_average.toFixed(
    1
  )}</span>  <span>/ ${data.vote_count}</span></li>
  <li class="movie-modal__list-item"><p>popularity </p><span>${data.popularity.toFixed(
    1
  )}</span> </li>
  <li class="movie-modal__list-item"><p>Title</p> <span>${
    data.original_title
  }</span></li>
  <li class="movie-modal__list-item"><p>genres</p> <span>${data.genres
    .map(el => el.name)
    .join(', ')}</span> </li>
  </ul>
  
    <h3 class="modal-movie__about">About</h3> 
    <p class="modal-movie__desc">${data.overview}</p> 
   <div class="modal-movie__btn-wrap"> 
    <button type="button" class="modal-movie__Watch" data-id=${
      data.id
    } data-btnname="watched">add to Watched</button> 
    <button type="button" class="modal-movie__queue" data-id=${
      data.id
    } data-btnname="queue">add to queue</button> 
    </div> 
 </div>
  `;
}

async function getDateFromId(id) {
  const api = new ThemoviedbAPI();
  const modalEl = document.querySelector('.modal-movie');
  api.movie_id = id;

  try {
    const { data } = await api.getMovieDetails();
    console.log(data);
    modalEl.insertAdjacentHTML('afterbegin', createModalWindow(data));
  } catch {
    err => console.warn(err);
  }
}

async function modalIsOpen(ids) {
  const instance = BasicLightBox.create('<div class="modal-movie"></div>');
  instance.show();
  await getDateFromId(ids);
  if (instance.visible()) {
    const closeBtn = document.querySelector('[data-close]');
    closeBtn.addEventListener('click', () => {
      instance.close();
    });
    // window.addEventListener('keydown', evt => {
    //   console.log('click');
    //   if (evt.code === 'Escape') {
    //     instance.close();
    //   }
    // });

    document.querySelector('.modal-movie__Watch');
    // .addEventListener('click', handleClickMovieButton);
    document.querySelector('.modal-movie__queue');
    // .addEventListener('click', handleClickMovieButton);
  }
}

ulEll.addEventListener('click', hendlerClickCard);

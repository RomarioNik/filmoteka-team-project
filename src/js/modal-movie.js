import * as BasicLightBox from 'basiclightbox';
const bodyScrollLock = require('body-scroll-lock');
import { ThemoviedbAPI } from './themoviedb-api';
import { setIdLocaleStorageQueue } from './localeStorageQueue';
import { setIdLocaleStorageWatch } from './localeStorageWatch';
import { searchingInfoButtonQueue } from './proverkaSettingsQueue';
import { searchingInfoButtonWatch } from './proverkaSettingsWatch';
import { updateButtonOnModal } from './firebase/updateButtonOnModal.js';
import { handleClickMovieButton } from './handleModalFilmButton/handleModalFilmButton';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/auth/getAuth';
import baseImage from '../images/base_image.jpg';

// lock body
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const targetElement = document.querySelector('body'); //.pageWrap

const ulEll = document.querySelector('.film__gallery');
export const hendlerClickCard = event => {
  // проверяю, клик по карточке или нет.
  if (event.target.nodeName !== 'UL') {
    let idLi = event.target.dataset.id;
    disableBodyScroll(targetElement);
    modalIsOpen(idLi);
  }
};

function createModalWindow(data) {
  const imgFromServer = data.poster_path;
  const basePath = 'https://image.tmdb.org/t/p/w400';
  const path = imgFromServer !== null ? basePath + imgFromServer : baseImage;
  return `
  <div class="modal-movie">
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

  <img src="${path}" class="modal-movie__img" alt="${data.original_title}" />
 <div class="movie-modal__content">
    <h2 class="modal-movie__title">${data.original_title}</h2> 
  <ul class=modal-movie__list>
  <li class="movie-modal__list-item"><p>Vote/Votes</p><span><span class="active">${data.vote_average.toFixed(
    1
  )}</span>  <span>/ ${data.vote_count}</span></span></li>
  <li class="movie-modal__list-item"><p>popularity </p><span>${data.popularity.toFixed(
    1
  )}</span> </li>
  <li class="movie-modal__list-item"><p>Title</p> <span>${
    data.original_title
  }</span></li>
<li class="movie-modal__list-item"><p>genres</p><span>${data.genres
    .map(el => el.name)
    .join(', ')}</span></li>
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
  </div></div>`;
}

// async function getDateFromId(id) {
//   const api = new ThemoviedbAPI();
//   const modalEl = document.querySelector('.modal-movie');
//   api.movie_id = id;

//   try {
//     const { data } = await api.getMovieDetails();
//     modalEl.insertAdjacentHTML('afterbegin', createModalWindow(data));
//   } catch {
//     err => console.warn(err);
//   }
// }

async function modalIsOpen(ids) {
  let dataToModal = '';
  const api = new ThemoviedbAPI();
  api.movie_id = ids;
  try {
    const { data } = await api.getMovieDetails();
    dataToModal = createModalWindow(data);
  } catch {
    err => console.warn(err);
  }

  const instance = BasicLightBox.create(dataToModal, {
    onShow: instance => {
      // document.body.classList.add('modal-open');
    },
    onClose: instance => {
      window.removeEventListener('keydown', modalClose);
      // document.body.classList.remove('modal-open');
      enableBodyScroll(targetElement);
    },
  });
  instance.show();
  // await getDateFromId(ids);
  if (instance.visible()) {
    const closeBtn = document.querySelector('[data-close]');
    closeBtn.addEventListener('click', () => {
      instance.close();
    });
    window.addEventListener('keydown', modalClose);
    function modalClose(evt) {
      if (evt.code === 'Escape') {
        instance.close();
      }
    }

    // проверяем вошел ли пользователь
    // и если не вошел, то сохраняем в localstorage
    onAuthStateChanged(auth, user => {
      if (user === null) {
        function proverkaLoadingLocaleQ(btnka) {
          if (searchingInfoButtonQueue(btnka)) {
            btnka.textContent = 'remove from queue';
            return;
          }
          btnka.textContent = 'add to queue';
        }

        function proverkaLoadingLocaleW(btnka) {
          if (searchingInfoButtonWatch(btnka)) {
            btnka.textContent = 'remove from Watched';
            return;
          }
          btnka.textContent = 'add to Watched';
        }

        const buttonQueueLocale = document.querySelector('.modal-movie__queue');
        const buttonnWatchedLocale = document.querySelector(
          '.modal-movie__Watch'
        );

        proverkaLoadingLocaleQ(buttonQueueLocale);
        proverkaLoadingLocaleW(buttonnWatchedLocale);
        buttonQueueLocale.addEventListener('click', event => {
          setIdLocaleStorageQueue(event);
          if (searchingInfoButtonQueue(buttonQueueLocale)) {
            event.currentTarget.textContent = 'remove to queue';
            return;
          }
          event.currentTarget.textContent = 'add to queue';
        });

        buttonnWatchedLocale.addEventListener('click', event => {
          setIdLocaleStorageWatch(event);
          if (searchingInfoButtonWatch(buttonnWatchedLocale)) {
            event.currentTarget.textContent = 'remove to Watched';
            return;
          }
          event.currentTarget.textContent = 'add to Watched';
        });
      } else {
        // если пользователь вошел,
        // то сораняем на сервер
        updateButtonOnModal(ids);
        document
          .querySelector('.modal-movie__Watch')
          .addEventListener('click', handleClickMovieButton);
        document
          .querySelector('.modal-movie__queue')
          .addEventListener('click', handleClickMovieButton);
      }
    });
  }
}

ulEll.addEventListener('click', hendlerClickCard);

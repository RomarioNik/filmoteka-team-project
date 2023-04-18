import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresLengthById } from './change-genres-length';
import { makeReleaseYearById } from './release-year';
import { filmNaneLengthById } from './film-name-length';
import createFilmsCard from '../templates/gallery-card.hbs';
import { filmPosterLinkById } from './film-poster-check-link';
import { getUserData } from './firebase/crudData';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/auth/getAuth';

const galleryListEl = document.querySelector('.film__gallery');

export async function renderCardsById(idArray) {
  const themoviedbAPI = new ThemoviedbAPI();

  const arrayOfPromises = idArray.map(async id => {
    themoviedbAPI.movie_id = id;
    try {
      const { data } = await themoviedbAPI.getMovieDetails();
      return data;
    } catch (err) {
      console.log(err);
    }
  });
  const cards = await Promise.all(arrayOfPromises); // параллельній запрос!
  console.log(cards);
  await filmNaneLengthById(cards);
  await filmPosterLinkById(cards);
  await changeGenresLengthById(cards);
  await makeReleaseYearById(cards);
  galleryListEl.innerHTML = createFilmsCard(cards);
}

export function onWatchedBtnClick() {
  onAuthStateChanged(auth, user => {
    if (user === null) {
      // если не залогинился рендерим массив из localstoge
      let ids = [
        948713, 811913, 594767, 700391, 76600, 502356, 603692, 842675, 640146,
        736790, 800787, 739405, 1073413, 677179, 1011367, 719256, 1067282,
        1110586, 1070777, 830896, 493529,
      ];
      renderCardsById(ids);
    } else {
      // если юзер вошел (логин, пароль) рендерим с сервера
      getUserData(getArrayOfIdMovies);

      function getArrayOfIdMovies(data) {
        renderCardsById(data.watched);
      }
    }
  });
}

export function onQueueBtnClick() {
  onAuthStateChanged(auth, user => {
    if (user === null) {
      // если не залогинился рендерим массив из localstoge
      let ids = [
        603692, 948713, 493529, 811913, 594767, 700391, 76600, 502356, 603692,
        842675, 640146, 736790, 800787, 739405, 1073413, 677179, 1011367,
        719256, 1067282, 1110586, 1070777, 830896, 493529, 1073413,
      ];
      renderCardsById(ids);
    } else {
      // если юзер вошел (логин, пароль) рендерим с сервера
      getUserData(getArrayOfIdMovies);

      function getArrayOfIdMovies(data) {
        renderCardsById(data.queue);
      }
    }
  });
}

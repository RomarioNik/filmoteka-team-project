import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';
import createFilmsCard from '../templates/gallery-card.hbs';
import { filmPosterLink } from './film-poster-check-link';

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
  // await filmNaneLength(cards);
  // await filmPosterLink(cards);
  // await changeGenresLength(cards);
  // await makeReleaseYear(cards);
  galleryListEl.innerHTML = createFilmsCard(cards);
}

export function onWatchedBtnClick() {
  let ids = [
    948713, 594767, 700391, 76600, 502356, 603692, 842675, 640146, 736790,
    800787, 739405, 1073413, 677179, 1011367, 719256, 1067282, 1110586, 1070777,
    830896, 493529,
  ];
  renderCardsById(ids);
}

export function onQueueBtnClick() {
  let ids = [
    948713, 594767, 700391, 76600, 502356, 603692, 842675, 640146, 736790,
    800787, 739405, 1073413, 677179, 1011367, 719256, 1067282, 1110586, 1070777,
    830896, 493529,
  ];
  renderCardsById(ids);
}
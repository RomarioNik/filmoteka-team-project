import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';

import { filmPosterLink } from './film-poster-check-link';

import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

const errorSearchMessage = document.querySelector('.js_error_search');

export async function renderTrending(paginationPage = 1) {
  errorSearchMessage.classList.add('is-hidden');
  const themoviedbAPI = new ThemoviedbAPI();
  themoviedbAPI.page = paginationPage;
  try {
    const { data } = await themoviedbAPI.getTrending();
    await filmNaneLength(data);
    await filmPosterLink(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);
  
    galleryListEl.innerHTML = createFilmsCard(data.results);
    console.log(data.results)
  } catch (err) {
   console.log(err);
  }
}

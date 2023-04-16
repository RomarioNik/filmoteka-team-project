import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';

import { filmPosterLink } from './film-poster-check-link';

import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

export async function renderTrending(paginationPage = 1) {
  const themoviedbAPI = new ThemoviedbAPI();
  console.log(paginationPage);
  themoviedbAPI.page = paginationPage; // змінювати пагінацією
  try {
    const { data } = await themoviedbAPI.getTrending();
    await filmNaneLength(data);
    await filmPosterLink(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);
    galleryListEl.innerHTML = createFilmsCard(data.results);
  } catch (err) {
    console.log(err);
  }
}

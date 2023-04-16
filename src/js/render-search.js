import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';

import { filmPosterLink } from './film-poster-check-link';

import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

export async function renderSearch(event) {
  event.preventDefault();
  const themoviedbAPI = new ThemoviedbAPI();
  themoviedbAPI.query =
    event.currentTarget.elements['searchQuery'].value.trim();
  themoviedbAPI.page = 1; // змінювати пагінацією
  try {
    const { data } = await themoviedbAPI.searchMovies();
    await filmNaneLength(data);
    await filmPosterLink(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);

    galleryListEl.innerHTML = createFilmsCard(data.results);
  } catch (err) {
    console.log(err);
  }
}

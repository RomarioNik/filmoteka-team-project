import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';

import { filmPosterLink } from './film-poster-check-link';

import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');
const errorSearchMessage = document.querySelector('.js_error_search');

const inputSearch = document.querySelector('.search_input');
export async function renderSearch(event, paginationPage = 1) {
  const themoviedbAPI = new ThemoviedbAPI();

  if (event.type === 'submit') {
    event.preventDefault();
    themoviedbAPI.query =
      event.currentTarget.elements['searchQuery'].value.trim();
  } else {
    themoviedbAPI.query = inputSearch.value.trim();
  }

  themoviedbAPI.page = paginationPage;
  try {
    const { data } = await themoviedbAPI.searchMovies();
    if (data.results.length === 0) {
      errorSearchMessage.classList.remove('is-hidden');
      return;
    }

    errorSearchMessage.classList.add('is-hidden');

    await filmNaneLength(data);
    await filmPosterLink(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);

    galleryListEl.innerHTML = createFilmsCard(data.results);
  } catch (err) {
    console.log(err);
  }
}

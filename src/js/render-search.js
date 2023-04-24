import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length';

import { filmPosterLink } from './film-poster-check-link';

import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');
const errorSearchMessage = document.querySelector('.js_error_search');

const mainPaginationElements = document.querySelector('.js_main_pagination');
const libraryPaginationElements = document.querySelector(
  '.js_library_pagination'
);
const searchPaginationElements = document.querySelector(
  '.js_search_pagination'
);

const inputSearch = document.querySelector('.search_input');

let pagination;

let paginationOptions = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

export async function onSearchClick(event) {
  if (inputSearch.value) {
    if (event.type === 'submit') {
      await renderSearch(event, 1).then(data => {
        paginationOptions.totalItems = data.total_results;
        pagination = new Pagination('search-pagination', paginationOptions);
      });
    } else {
    }
  } else {
    console.log('no data for search');
  }
}

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
      return data;
    }

    errorSearchMessage.classList.add('is-hidden');

    await filmNaneLength(data);
    await filmPosterLink(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);
    galleryListEl.innerHTML = createFilmsCard(data.results);
    searchPaginationElements.classList.remove('is-hidden');
    libraryPaginationElements.classList.add('is-hidden');
    mainPaginationElements.classList.add('is-hidden');
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function onSearchPaginationPage(event) {
  if (inputSearch.value) {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      renderSearch(event, currentPage).then(data => {
        if (data.total_results !== paginationOptions.totalItems) {
          paginationOptions.totalItems = data.total_results;
          pagination = new Pagination('search-pagination', paginationOptions);
          renderSearch(event, (paginationPage = 1));
        }
      });
    });
  } else {
    console.log('no data');
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  // console.log(inputSearch.value);
}

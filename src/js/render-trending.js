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

let trendsPagination;

let paginationOptions = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

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
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function onTrandsPaginationPage(event) {
  trendsPagination.on('afterMove', event => {
    const currentPage = event.page;
    renderTrending(currentPage);
  });

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

export function onHomeBtnClick() {
  renderTrending().then(data => {
    paginationOptions.totalItems = data.total_results;
    trendsPagination = new Pagination('main-pagination', paginationOptions);
  });
  searchPaginationElements.classList.add('is-hidden');
  libraryPaginationElements.classList.add('is-hidden');
  mainPaginationElements.classList.remove('is-hidden');
}

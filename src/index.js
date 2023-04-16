import { hendlerClickCard } from './js/modal-movie';
import { firebase } from './js/firebase/firebase';
import { checkAuthState } from './js/firebase/auth/checkAuthState';
import { renderTrending } from './js/render-trending';
import { ulAdd } from './js/modal-dorabotka';
import {} from './js/Btn-up';
import { renderSearch } from './js/render-search';

renderTrending();

import { handleLoadNextPaginationPage } from './js/unsplash-api';

const btnPagination = document.querySelector('.tui-pagination');

btnPagination.addEventListener('click', handleLoadNextPaginationPage);
const ulHtml = document.querySelector('.film__gallery');

console.log(ulHtml);
ulHtml.addEventListener('click', ulAdd);
firebase();

const searchFormElement = document.querySelector('.js_header_search_form');
searchFormElement.addEventListener('submit', renderSearch);
(() => {
  window.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
  });
})();

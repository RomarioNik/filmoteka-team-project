import { hendlerClickCard } from './js/modal-movie';
import { handleOpenModalClick } from './js/modal-students';
import { firebase } from './js/firebase/firebase';
import { checkAuthState } from './js/firebase/auth/checkAuthState';
import {
  // renderTrending,
  onTrandsPaginationPage,
  onHomeBtnClick,
} from './js/render-trending';
import { onSearchPaginationPage, onSearchClick } from './js/render-search';
import { ulAdd } from './js/modal-dorabotka';
import {} from './js/Btn-up';
// import { handleLoadNextPaginationPage, onSearchClick } from './js/unsplash-api';
import './js/preloader';
import './js/theme-switcher';
import {
  onWatchedBtnClick,
  onQueueBtnClick,
  onLibPaginationPageClick,
} from './js/render-library-by-id';

onHomeBtnClick();
// import { handleLoadNextPaginationPage } from './js/unsplash-api';

// const btnSearchPagination = document.querySelector('.tui-pagination');

// btnSearchPagination.addEventListener('click', onSearchPaginationPage);
firebase();
checkAuthState();

const searchFormElement = document.querySelector('.js_header_search_form');
searchFormElement.addEventListener('submit', onSearchClick);

const watchedHeaderBtn = document.querySelector('.btn_watch');
watchedHeaderBtn.addEventListener('click', onWatchedBtnClick);

const queueHeaderBtn = document.querySelector('.btn_queue');
queueHeaderBtn.addEventListener('click', onQueueBtnClick);

const btnSearchPagination = document.querySelector('.tui-search-pagination');
btnSearchPagination.addEventListener('click', onSearchPaginationPage);

const btnLibPaginationEl = document.querySelector('.tui-library-pagination');
btnLibPaginationEl.addEventListener('click', onLibPaginationPageClick);

const btnMainPaginationEl = document.querySelector('.tui-main-pagination');
btnMainPaginationEl.addEventListener('click', onTrandsPaginationPage);

//home
const homeHeaderBtn = document.querySelector('.btn_home');
homeHeaderBtn.addEventListener('click', onHomeBtnClick);

// function onHomeBtnClick() {
//   console.log('click');
//   renderTrending();
// }

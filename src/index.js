import { hendlerClickCard } from './js/modal-movie';
import { handleOpenModalClick } from './js/modal-students';
import { firebase } from './js/firebase/firebase';
import { checkAuthState } from './js/firebase/auth/checkAuthState';
import { renderTrending } from './js/render-trending';
import { ulAdd } from './js/modal-dorabotka';
import {} from './js/Btn-up';
import { handleLoadNextPaginationPage } from './js/unsplash-api';
import './js/preloader';
import './js/theme-switcher';
import {
  onWatchedBtnClick,
  onQueueBtnClick,
  onLibPaginationPageClick,
} from './js/render-library-by-id';

renderTrending();
import { handleLoadNextPaginationPage } from './js/unsplash-api';

const btnPagination = document.querySelector('.tui-pagination');

btnPagination.addEventListener('click', handleLoadNextPaginationPage);
firebase();
checkAuthState();

const searchFormElement = document.querySelector('.js_header_search_form');
searchFormElement.addEventListener('submit', handleLoadNextPaginationPage);

const watchedHeaderBtn = document.querySelector('.btn_watch');
watchedHeaderBtn.addEventListener('click', onWatchedBtnClick);

const queueHeaderBtn = document.querySelector('.btn_queue');
queueHeaderBtn.addEventListener('click', onQueueBtnClick);

const btnLibPagination = document.querySelector('.tui-library-pagination');
btnLibPagination.addEventListener('click', onLibPaginationPageClick);

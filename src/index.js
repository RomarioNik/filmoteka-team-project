import { firebase } from './js/firebase/firebase';
import { renderTrending } from './js/render-trending';
import {ulAdd} from './js/modal-dorabotka';
import {} from'./js/Btn-up';
renderTrending();



import { handleLoadNextPaginationPage } from './js/unsplash-api';

const btnPagination = document.querySelector('.tui-pagination');

btnPagination.addEventListener('click', handleLoadNextPaginationPage);
const ulHtml = document.querySelector('.film__gallery');
console.log(ulHtml)
ulHtml.addEventListener('click',ulAdd);
firebase();

import { firebase } from './js/firebase/firebase';
import { renderTrending } from './js/render-trending';
import { ulAdd } from './js/modal-dorabotka';
import {} from './js/Btn-up';
import { renderSearch } from './js/render-search';

renderTrending();
const ulHtml = document.querySelector('.film__gallery');
console.log(ulHtml);
ulHtml.addEventListener('click', ulAdd);
firebase();

const searchFormElement = document.querySelector('.js_header_search_form');
searchFormElement.addEventListener('submit', renderSearch);

import { firebase } from './js/firebase/firebase';
import { renderTrending } from './js/render-trending';
import {ulAdd} from './js/modal-dorabotka';

renderTrending();
const ulHtml = document.querySelector('.film__gallery');
console.log(ulHtml)
ulHtml.addEventListener('click',ulAdd);
firebase();
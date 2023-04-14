import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';

const liEl = document.querySelector('.card-list__item');
const api = new ThemoviedbAPI();

export const hendlerClickCard = evt => {
  // проверяю, клик по карточке или нет.
  if (evt.currentTarget.nodeName != 'LI') {
    return;
  }
  // открывает модальное окно!
  const instance = BasicLightBox.create(`<div class="modal-movie"></div>`);
  instance.show();
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow(data) {
  return `
  
  <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class=""modal-movie__img />
  <h2>I need header</h2>
  <p><span></span></p>
  <p><span></span></p>
  <p><span></span></p>
  <p><span></span></p>
  <h3>About</h3>
  <p>discr</p>
  <div>
  <button type="button">add to Watched</button>
  <button type="button">add to queue</button>
  </div>
  
  `;
}

liEl.addEventListener('click', hendlerClickCard);

function getMovieId(id) {
  api.movie_id = id;
  api
    .getMovieDetails()
    .then(({ data }) => {
      console.log(data);
      console.log(createModalWindow(data));
    })
    .catch(err => console.warn(err));
}
getMovieId(920);

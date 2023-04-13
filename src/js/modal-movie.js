import * as BasicLightBox from 'basiclightbox';
import { ThemoviedbAPI } from './themoviedb-api';

const liEl = document.querySelector('.card-list__item');
const api = new ThemoviedbAPI();

const instance = BasicLightBox.create(createModalWindow());
export const hendlerClickCard = evt => {
  // проверяю, клик по карточке или нет.
  if (evt.currentTarget.nodeName != 'LI') {
    return;
  }
  // открывает модальное окно!
  instance.show();
};
// создает разметку модалки и вызывается в экземпляре BasicLightBox
function createModalWindow() {
  return `
  <div class="modal-movie">
  <img src="" class=""modal-movie__img />
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
    })
    .catch(err => console.warn(err));
}
getMovieId(920);

import { writeUserData } from '../firebase/crudData';
// 'watched'
// id=948713

// дата атрибуты на кнопке (модалка с фильмом)
// data-id="948713"
// data-btnname="watched"

export async function handleClickMovieButton(e) {
  const btnName = e.target.dataset.btnname;
  const idMovie = e.target.dataset.id;

  writeUserData(idMovie, btnName);
}

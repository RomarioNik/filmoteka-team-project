import { writeUserData, readUserData } from '../firebase/crudData';

// 'watched'
// id=948713

// дата атрибуты на кнопке (модалка с фильмом)
// data-id="948713"
// data-btnname="watched"

export function handleClickMovieButton(e) {
  // even take value
  const btnName = 'watched';
  const idMovie = 948713;

  const auth = true;

  writeUserData(idMovie, btnName);
}

// handleClickMovieButton();

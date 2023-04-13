import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresIdToName } from './change-genres-id-to-name';

const searchFormEl = document.querySelector('.js-search-form');

export async function renderTrending() {
  // event.preventDefault();
  const themoviedbAPI = new ThemoviedbAPI();
  try {
    const { data } = await themoviedbAPI.getTrending();
    changeGenresIdToName(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

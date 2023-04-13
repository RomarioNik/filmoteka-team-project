import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresIdToName } from './change-genres-id-to-name';

export async function renderTrending() {
  const themoviedbAPI = new ThemoviedbAPI();
  try {
    const { data } = await themoviedbAPI.getTrending();
    changeGenresIdToName(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

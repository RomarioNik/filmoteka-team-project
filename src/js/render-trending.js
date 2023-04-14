import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresIdToName } from './change-genres-id-to-name';
import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

export async function renderTrending() {
  const themoviedbAPI = new ThemoviedbAPI();
  themoviedbAPI.page = 1; // змінювати пагінацією
  try {
    const { data } = await themoviedbAPI.getTrending();
    await changeGenresIdToName(data);
    galleryListEl.innerHTML = createFilmsCard(data.results);
  } catch (err) {
    console.log(err);
  }
}

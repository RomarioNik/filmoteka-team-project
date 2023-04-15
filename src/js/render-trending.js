import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresIdToName } from './change-genres-id-to-name';
import { changeGenresLength } from './change-genres-length';
import createFilmsCard from '../templates/gallery-card.hbs';


const galleryListEl = document.querySelector('.film__gallery');

export async function renderTrending() {
  const themoviedbAPI = new ThemoviedbAPI();
  themoviedbAPI.page = 1; // змінювати пагінацією
  try {
    const { data } = await themoviedbAPI.getTrending();
    // await changeGenresLength(data);
    await changeGenresIdToName(data);    

    galleryListEl.innerHTML = createFilmsCard(data.results);
  } catch (err) {
    console.log(err);
  }
}

import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresLength } from './change-genres-length';
import { makeReleaseYear } from './release-year';
import { filmNaneLength } from './film-name-length'; 
import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

export async function renderTrending() {
  const themoviedbAPI = new ThemoviedbAPI();
  themoviedbAPI.page = 1; // змінювати пагінацією
  try {
    const { data } = await themoviedbAPI.getTrending();
    await filmNaneLength(data);
    await changeGenresLength(data);
    await makeReleaseYear(data);     
    galleryListEl.innerHTML = createFilmsCard(data.results);
    } catch (err) {
    console.log(err);
  }
}

import { changeGenresIdToName } from './change-genres-id-to-name';

export async function changeGenresLength(movies) {
  await changeGenresIdToName(movies);
  try {
    movies.results.forEach(element => {
      const arrayFullGemres = element.genre_ids;
      const maxLength = 2;
      let stringGanres = '';

      if (arrayFullGemres.length > maxLength) {
        stringGanres = arrayFullGemres.slice(0, 2).join(', ') + ', Other';
      } else {
        stringGanres = arrayFullGemres.join(', ');
      }
      element.genre_ids = stringGanres;
    });
  } catch (err) {
    console.log(err);
  }
}

export async function changeGenresLengthById(movies) {

  try {
    movies.forEach(element => {
      const arrayFullGemres = element.genres.map(el => el.name);
      if (arrayFullGemres.length === 0) {
        element.genre_ids = 'Other';
        return;
      }
      const maxLength = 2;
      let stringGanres = '';

      if (arrayFullGemres.length > maxLength) {
        stringGanres = arrayFullGemres.slice(0, 2).join(', ') + ', Other';
      } else {
        stringGanres = arrayFullGemres.join(', ');
      }
      element.genre_ids = stringGanres;
    });
  } catch (err) {
    console.log(err);
  }
}

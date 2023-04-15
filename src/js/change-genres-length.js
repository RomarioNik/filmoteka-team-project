import { changeGenresIdToName } from './change-genres-id-to-name';

export async function changeGenresLength(movies) {
  await changeGenresIdToName(movies);
  try {   
  movies.results.forEach(element => {
    const arrayFullGemres = element.genre_ids;
    const maxLength = 2;
    let stringGanres = ''

    if (arrayFullGemres.length > maxLength){
      stringGanres = arrayFullGemres
      .slice(0, 2)
      .join(', ') + ', Other';   
    } else { stringGanres = arrayFullGemres.join(', ')
    }
element.genre_ids = stringGanres
  })
    } catch (err) {
    console.log(err);
  }
}
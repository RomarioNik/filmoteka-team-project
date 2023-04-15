
import { ThemoviedbAPI } from './themoviedb-api';
import { changeGenresIdToName } from './change-genres-id-to-name';








export async function changeGenresLength(movies) {
const themoviedbAPI = new ThemoviedbAPI();
   
  try {
    await changeGenresIdToName(movies);
  const genresResponce = await themoviedbAPI.getGenres();
  //console.log(genresResponce);
  const genresIdList = genresResponce.data.genres;
  //console.log(genresIdList);
  //const genresName = 
  movies.results.forEach(element => {
    const maxLength = 2;
    const array = element.genre_ids;
    
    //console.log(array);
    if (array.length > maxLength) {
      let newArray = array.slice(0, 2);      
     
      newArray.push('Other')
      console.log(newArray);
      const genresLongNames = newArray.join(', ');
      console.log(genresLongNames);
      return genresLongNames
      
    } else {
      console.log(array);
      const genresShotNanes= array.join(', ')
      console.log(genresShotNanes)
      return genresShotNanes;
    }
  })
     
  } catch (err) {
    console.log(err);
  }
}

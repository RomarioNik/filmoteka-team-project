
// import { ThemoviedbAPI } from './themoviedb-api';
// import { changeGenresIdToName } from './change-genres-id-to-name';

export async function changeGenresLength(movies) {
  // const themoviedbAPI = new ThemoviedbAPI();
  
  
  try {

  // const genresListResponce = await themoviedbAPI.getGenres();
  // //const genresIdList = genresListResponce.data.genres;
  //await changeGenresIdToName(data)
  movies.results.forEach(element => {
    const maxLength = 2;
    const array = element.genre_ids;
    
    //console.log(array);
    if (array.length > maxLength) {
      let newArray = array.slice(0, 2);      
      console.log(newArray);
      return newArray.push('Other')
    } else {
      console.log(array);
      return array
    }
  })    
  } catch (err) {
    console.log(err);
  }
}

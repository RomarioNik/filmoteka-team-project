import { ThemoviedbAPI } from './themoviedb-api';

export async function changeGenresIdToName(movies) {
  const themoviedbAPI = new ThemoviedbAPI();
  try {
    const genresListResponce = await themoviedbAPI.getGenres();
    const genresIdList = genresListResponce.data.genres;
    movies.results.forEach(element => {
      const array = element.genre_ids;
      if (array.length == 0) {
        element.genre_ids = ['Other'];
        return;
      }

      const genresNames = array.map(elem => {
        if (genresIdList.find(x => x.id === elem)) {
          return genresIdList.find(x => x.id === elem).name;
        } else {
          return 'Other';
        }
      });

      element.genre_ids = genresNames;
    });
  } catch (err) {
    console.log(err);
  }
}

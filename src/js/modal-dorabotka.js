import { ThemoviedbAPI } from './themoviedb-api'
export function ulAdd (event) {
if (event.target.nodeName !== 'UL') {
let idLi = event.target.dataset.id
async function renderMovieDetails(newId) {
    const themoviedbAPI = new ThemoviedbAPI();
      themoviedbAPI.movie_id = newId;
      try {
        const { data } = await themoviedbAPI.getMovieVideos();
        console.log(data);
    
      } catch (err) {
        console.log(err);
      }
    }
    renderMovieDetails(idLi)
}
return
}
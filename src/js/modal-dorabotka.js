import { ThemoviedbAPI } from './themoviedb-api'
export function ulAdd (event) {
if (event.target.nodeName !== 'UL') {
const idLi = event.target.dataset.id
console.log(idLi);
// async function renderMovieDetails(newId) {
//     const themoviedbAPI = new ThemoviedbAPI();
//       themoviedbAPI.movie_id = newId;
//       try {
//         const { data } = await themoviedbAPI.getMovieVideos();
//         console.log(data);
    
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     renderMovieDetails(idLi)
}
return
}
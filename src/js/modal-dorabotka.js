import { ThemoviedbAPI } from './themoviedb-api'
export function ulAdd (event) {
    console.log(event.target)
if (event.target !== 'UL') {
const idLi = event.target.dataset.id
console.log(idLi);
// async function renderMovieDetails(idLi) {
//     const themoviedbAPI = new ThemoviedbAPI();
//       themoviedbAPI.movie_id = idLi;
//       try {
//         const { data } = await themoviedbAPI.getMovieVideos();
//         console.log(data);
    
//       } catch (err) {
//         console.log(err);
//       }
//     }
}
return
}
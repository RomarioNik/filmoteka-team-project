
import { ThemoviedbAPI } from './js/themoviedb-api';

const  themoviedbAPI = new ThemoviedbAPI;

const gallaryListEl = document.querySelector('film__gallery');


// Отримання масиву карток "в тренді"
// Дивись також примітку стосовно жанрів, нижче в коментарях.
async function renderMain() {
  try {
    const { data } = await themoviedbAPI.getTrending();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
renderMain()
// async function changeGenresIdToName(movies) {
//       try {
//         const genresListResponce = await themoviedbAPI.getGenres();
//         const genresIdList = genresListResponce.data.genres;
//         movies.results.forEach(element => {
//           const array = element.genre_ids;
//           if (!array) return 'Other';
//           const genresNames = array.map(elem => {
//             if (genresIdList.find(x => x.id === elem)) {
//               return genresIdList.find(x => x.id === elem).name;
//             } else {
//               return 'Other';
//             }
//           });
    
//           element.genre_ids = genresNames;
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
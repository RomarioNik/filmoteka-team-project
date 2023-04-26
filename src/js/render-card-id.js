// import { ThemoviedbAPI } from './themoviedb-api';
// import { changeGenresLength } from './change-genres-length';
// import { makeReleaseYear } from './release-year';
// import { filmNaneLength } from './film-name-length';
// import createCardId from '../templates/card-id.hbs';
// import { filmPosterLink } from './film-poster-check-link';
// //       фейковий масив
// const id = [948713, 594767, 700391, 76600, 502356, 603692, 842675, 640146, 736790, 800787, 739405, 1073413, 677179, 1011367, 719256, 1067282, 1110586, 1070777, 830896, 493529]

// const galleryId = document.querySelector('.film__gallery');

// let newArray1 = [];

// async function renderCardId(el) {
//     const themoviedbAPI = new ThemoviedbAPI()
//     themoviedbAPI.movie_id = el;
// try {
//     const { data } = await themoviedbAPI.getMovieDetails()// Отримуєм масив з бекенда 
//     // await filmNaneLength(data);//  Функція довжини назви фільму
//     // await filmPosterLink(data);// Грузим картинку якщо не прийшла
//     // await changeGenresLength(data);//  Функція довжини жанру
//     await makeReleaseYear(data);// Функція року релізу
     
//     newArray1.push(data);
//     galleryId.innerHTML = createCardId(newArray1);
    
//     //console.log(data);
//     //return data;


//   } catch (err) {
//     console.log(err);
//   }
// }

// const newArray = id.forEach( el =>  { 
//   return renderCardId(el);
// })

// console.log(newArray1);




// console.log(newArray1[1])

// })
// console.log(id)

// const galleryId = document.querySelector('.film__gallery');

//  async function renderCardId(id) {
//     const themoviedbAPI = new ThemoviedbAPI()
    
// try {
//     const { data } = await themoviedbAPI.renderMovieDetails()// Отримуєм масив з бекенда 
//     // await filmNaneLength(data);//  Функція довжини назви фільму
//     // await filmPosterLink(data);// Грузим картинку якщо не прийшла
//     // await changeGenresLength(data);//  Функція довжини жанру
//     // await makeReleaseYear(data);// Функція року релізу
//     galleryId.innerHTML = createFilmsCard(data.results);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

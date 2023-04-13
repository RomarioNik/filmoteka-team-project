import axios from 'axios';

export class ThemoviedbAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '80fe24ea6ea4db327f1f3c79898b7ba2';

  media_type = 'movie';
  time_window = 'day';
  page = 1;
  query = null;
  movie_id = null;

  async getTrending() {
    try {
      return await axios.get(
        `${this.#BASE_URL}trending/${this.media_type}/${this.time_window}`,
        {
          params: {
            api_key: this.#API_KEY,
            page: this.page,
          },
        }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async searchMovies() {
    try {
      return await axios.get(`${this.#BASE_URL}search/movie`, {
        params: {
          api_key: this.#API_KEY,
          query: this.query,
          page: this.page,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getMovieDetails() {
    try {
      return await axios.get(`${this.#BASE_URL}/movie/${this.movie_id}`, {
        params: {
          api_key: this.#API_KEY,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getMovieVideos() {
    try {
      return await axios.get(
        `${this.#BASE_URL}/movie/${this.movie_id}/videos`,
        {
          params: {
            api_key: this.#API_KEY,
          },
        }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getGenres() {
    try {
      return await axios.get(`${this.#BASE_URL}/genre/movie/list`, {
        params: {
          api_key: this.#API_KEY,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

// Імпорт апі в свій js файл:
// import { ThemoviedbAPI } from './js/themoviedb-api';
// const themoviedbAPI = new ThemoviedbAPI();


// Отримання масиву карток "в тренді"
// Дивись також примітку стосовно жанрів, нижче в коментарях.
// async function renderMain() {
//   try {
//     const { data } = await themoviedbAPI.getTrending();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Пошук за ключовим словом:
// async function handleSearchFormSubmit(event) {
//   event.preventDefault();
// const searchQuery = event.currentTarget.elements['searchQuery'].value;  // задати інпуту в розмітці нейм name="searchQuery"
//   themoviedbAPI.query = searchQuery;
//   themoviedbAPI.page = 1;

//   try {
//     const { data } = await themoviedbAPI.searchMovies();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Отримання фільму за id (деталі по фільму)
// async function renderMovieDetails(event) {
//   event.preventDefault();
//   const movie_id = 920; // тут необхідно отримати id фільму по кліку на картку фільму і поставити замість 920
//   themoviedbAPI.movie_id = movie_id;

//   try {
//     const { data } = await themoviedbAPI.getMovieVideos();
//     console.log(data);

//   } catch (err) {
//     console.log(err);
//   }
// }

// Отримання посилання на трейлер
// async function getMovieTrailer(event) {
//   event.preventDefault();
//   const movie_id = 920; // тут необхідно отримати id фільму для пошуку по кліку на картку фільму і поставити замість 920
//   themoviedbAPI.movie_id = movie_id;

//   try {
//     const { data } = await themoviedbAPI.getMovieVideos();
//     console.log(data);
//     const key = data.results[0].key;
//     const linkToVideo = `https://www.youtube.com/watch?v=${key}`;
//     console.log(linkToVideo);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Якщо в розмітці мають бути зазначені жанри, то треба додати функцію заміни id жанрів на імена жанрів
// Ось функція, яку треба додати для виконання заміни і отримання відповіді з підстановкою імен.
// Функцію додавати після отримання відповіді з бекенду з картками, в яких є idжанрів.

// changeGenresIdToName(movies);

// і сама функція:
// async function changeGenresIdToName(movies) {
//   try {
//     const genresListResponce = await themoviedbAPI.getGenres();
//     const genresIdList = genresListResponce.data.genres;
//     movies.results.forEach(element => {
//       const array = element.genre_ids;
//       if (!array) return 'Other';
//       const genresNames = array.map(elem => {
//         if (genresIdList.find(x => x.id === elem)) {
//           return genresIdList.find(x => x.id === elem).name;
//         } else {
//           return 'Other';
//         }
//       });

//       element.genre_ids = genresNames;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

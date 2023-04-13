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

// Отримання масиву карток "в тренді"
// Якщо у відповіді приходять лише id жанрів, то щоб підставити замість них їх назви - додати після запиту функцію changeGenresIdToName(data)
// async function renderMain() {
  // const themoviedbAPI = new ThemoviedbAPI();
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
  // const themoviedbAPI = new ThemoviedbAPI();
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
  // const themoviedbAPI = new ThemoviedbAPI();
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
  // const themoviedbAPI = new ThemoviedbAPI();
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

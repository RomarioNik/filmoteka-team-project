import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderTrending } from './render-trending';

import { renderSearch } from './render-search';

import { ThemoviedbAPI } from './themoviedb-api';

const inputSearch = document.querySelector('.search_input');

let initialTotalItems;

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination('pagination', options);

export async function handleLoadNextPaginationPage(event) {
  if (inputSearch.value) {
    if (event.type === 'submit') {
      pagination.reset();
      renderSearch(event, 1);
    } else {
      renderSearch(event, pagination._currentPage);
    }
  } else {
    const themoviedbAPI = new ThemoviedbAPI();
    const { data } = await themoviedbAPI.getTrending();
    console.log(data.total_results);
    initialTotalItems = data.total_results
    pagination.setTotalItems(initialTotalItems)

    renderTrending(pagination._currentPage);
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  // console.log(inputSearch.value)
}

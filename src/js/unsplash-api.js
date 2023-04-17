import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderTrending } from './render-trending';

import { renderSearch } from './render-search';
const inputSearch = document.querySelector('.search_input');

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination('pagination', options);

export function handleLoadNextPaginationPage() {
  if (inputSearch.value) {
    renderSearch(event, pagination._currentPage);

} else {
  renderTrending(pagination._currentPage);
}
  
console.log(inputSearch.value)
}

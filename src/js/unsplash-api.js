import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderTrending } from './render-trending';

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 20,
  page: 1,
};
const pagination = new Pagination('pagination', options);

export function handleLoadNextPaginationPage() {
  renderTrending(pagination._currentPage);
}

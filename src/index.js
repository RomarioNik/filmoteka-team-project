import { renderTrending } from './js/render-trending';

renderTrending();



import { handleLoadNextPaginationPage } from './js/unsplash-api';

const btnPagination = document.querySelector('.tui-pagination');

btnPagination.addEventListener('click', handleLoadNextPaginationPage);

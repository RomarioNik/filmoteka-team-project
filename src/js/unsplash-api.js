// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { renderTrending } from './render-trending';

// import { renderSearch } from './render-search';

// import { ThemoviedbAPI } from './themoviedb-api';
// import { on } from 'process';

// const inputSearch = document.querySelector('.search_input');

// let initialTotalItems;
// let pagination;

// let paginationOptions = {
//   totalItems: 20000,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
// };

// // pagination = new Pagination('pagination', paginationOptions);

// export async function onSearchClick(event) {
//   if (inputSearch.value) {
//     if (event.type === 'submit') {
//       pagination.reset();
//       await renderSearch(event, 1).then(data => {
//         console.log(data);
//         paginationOptions.totalItems = data.total_results;
//         pagination = new Pagination('pagination', paginationOptions);
//       });
//     } else {
//       // pagination.on('afterMove', event => {
//       //   const currentPage = event.page;
//       //   console.log(currentPage);
//       //   renderSearch(event, currentPage);
//       // });
//     }
//   } else {
//     console.log('no data for search');
//   }
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
//   });
//   // console.log(inputSearch.value)
// }

// export async function handleLoadNextPaginationPage(event) {
//   if (inputSearch.value) {
//     if (event.type === 'submit') {
//       // pagination.reset();
//       await renderSearch(event, 1).then(data => {
//         console.log(data);
//         paginationOptions.totalItems = data.total_results;
//         pagination = new Pagination('pagination', paginationOptions);
//       });
//     } else {
//       pagination.on('afterMove', event => {
//         const currentPage = event.page;
//         console.log(currentPage);
//         renderSearch(event, currentPage);
//       });
//     }
//   } else {
//     console.log('no data');
//     paginationOptions.totalItems = 20000;
//     pagination.on('afterMove', event => {
//       const currentPage = event.page;
//       console.log(currentPage);
//       renderTrending(currentPage);
//     });
//   }
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
//   });
//   console.log(inputSearch.value);
// }

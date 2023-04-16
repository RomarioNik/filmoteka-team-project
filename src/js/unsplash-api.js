import axios from 'axios';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { ThemoviedbAPI } from './themoviedb-api';

import { changeGenresIdToName } from './change-genres-id-to-name';
import createFilmsCard from '../templates/gallery-card.hbs';

const galleryListEl = document.querySelector('.film__gallery');

const options = {
        totalItems: 1000,    
        itemsPerPage: 20,
        visiblePages: 5 ,
        page: 1
    }

const pagination = new Pagination('pagination', options);

async function renderTrendingPagination() {
        const themoviedbAPI = new ThemoviedbAPI();
        themoviedbAPI.page = pagination._currentPage; // змінювати пагінацією

    console.log(themoviedbAPI.page);
    
    try {
    const { data } = await themoviedbAPI.getTrending();
    await changeGenresIdToName(data);
    galleryListEl.innerHTML = createFilmsCard(data.results);
    } catch (err) {
    console.log(err);
    }
}

export function handleLoadNextPaginationPage (event) {
    console.log(pagination._currentPage);
    
    renderTrendingPagination();
};

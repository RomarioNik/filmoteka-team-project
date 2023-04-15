import axios from 'axios';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { ThemoviedbAPI } from './themoviedb-api';

export class UnsplashAPI {
    options = {
        totalItems: 1000,    
        itemsPerPage: 20,
        visiblePages: 20,
        page: 1
    }

    query = null;

    page = this.options.page;

    pagination = new Pagination('pagination', this.options);
}
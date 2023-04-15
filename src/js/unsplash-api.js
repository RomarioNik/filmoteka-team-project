import axios from 'axios';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { ThemoviedbAPI } from './themoviedb-api';

const btnPagination = document.querySelector('.tui-pagination');

const options = {
        totalItems: 1000,    
        itemsPerPage: 20,
        visiblePages: 20,
        page: 1
    }

const pagination = new Pagination('pagination', options);

import axios from 'axios';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export class UnsplashAPI {
    const options = {
        totalItems: 1000,    
        itemsPerPage: 20,
        visiblePages: 20,
        page: 1
    }

    query = null;
}
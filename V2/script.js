import { searchMovies } from './api.js';
import { displayMovies, displayPagination } from './display.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');
const pagination = document.getElementById('pagination');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const movies = await searchMovies(searchTerm);
        displayMovies(movieList, movies.results);
        displayPagination(pagination, movies.total_pages, searchMovies);
    }
});

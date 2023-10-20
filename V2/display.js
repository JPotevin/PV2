const imageBaseURL = 'https://image.tmdb.org/t/p/w185';

function displayMovies(movieList, movies) {
    movieList.innerHTML = '';
    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <img src="${imageBaseURL}${movie.poster_path}" alt="${movie.title}">
        `;
        movieList.appendChild(movieElement);
    });
}

function displayPagination(pagination, totalPages, searchMovies) {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.addEventListener('click', async () => {
            const searchTerm = searchInput.value;
            const movies = await searchMovies(searchTerm, i);
            displayMovies(movieList, movies.results);
        });
        pagination.appendChild(pageLink);
    }
}

export { displayMovies, displayPagination };

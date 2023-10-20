const apiKey = '38ffd1f0294eb3d95f88fe587411fa18';
const baseUrl = 'https://api.themoviedb.org/3/search/movie';

async function searchMovies(query, page = 1) {
    const url = `${baseUrl}?api_key=${apiKey}&query=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export { searchMovies };

export const searchFilm = filmName => {
    const API_KEY = '?apikey=d412ad69';
    const url = `http://www.omdbapi.com/${API_KEY}&t=`;

    console.log(filmName);
    if (!filmName) {
        return Promise.reject({
            message: 'Film name is required'
        });
    }

    return fetch(url + filmName)
        .then(stream => stream.json())
};
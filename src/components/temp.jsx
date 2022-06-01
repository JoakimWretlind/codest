
export function removeWatchedMovie(title) {
    var movies = getWatchedMovies();

    for (var i = 0; i < movies.length; i++) {
        if (!movies[i]) continue;
        if (movies[i].title == title) {
            movies[i] = null
        }
    }

    localStorage.setItem('movies-watched', JSON.stringify(movies));


}


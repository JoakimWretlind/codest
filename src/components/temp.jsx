
export function addWatchedMovie(title, description, image) {
    var movie = {};
    movie.title = title;
    movie.description = description;
    movie.image = image;

    var movies = getWatchedMovies();
    movies.push(movie);

    localStorage.setItem('movies-watched', JSON.stringify(movies));


}

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


const getMoviesComponents = (movies) => {
    var components = [];

    movies.forEach(function (movie) {
        components.push(
            <div className="all">
                <div>
                    <img src={movie.image} height="100px" />
                </div>
                <span>
                    <a className="movie-watched" href="#" onClick={function () { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
                        {movie.title}
                    </a>
                </span>
                <br />
                <span>
                    {movie.comment}
                </span>
                <br />
                <br />
            </div>
        )
    })

    return components;
}

function getWatchedMoviesComponents(movies) {
    var components = [];

    movies.forEach(function (movie) {
        components.push(movie && (
            <div className="watched">
                <div>
                    <img src={movie.image} height="100px" />
                </div>
                <span>
                    <a className="movie-watched" href="#" onClick={function () { removeWatchedMovie(movie.title) }}>
                        {movie.title}
                    </a>
                </span>
                <br />
                <span>
                    {movie.comment}
                </span>
                <br />
                <br />
            </div>
        ))
    })

    return components;
}




import React from 'react';
import './App.css';
/** This file should be kept as clean as possible, prefferably only containing files that should get to the html-file */
import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

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

/** Here is the second movie.forEach()
 * 1) try to replace .forEach() with .map()
 * 2) Is it possible to just write this once, as one component, and reuse it? (hint: useState and props)
 */
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

/** props are not needed to be passed in here
 * 
 * The form presented below, would be great as its own component.
 * Also, to make the code easier to read, let the code breath some.
*/
function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={function (e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function (e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function (e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function (e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;

/** MAIN THINGS!
 *
 * Don't forget to comment your code. What it does and/or how it works.
 *
 * Make sure to check the console for warnings and errors, and try to fix them as the pop up.
 *
 * Check your version of react and what is currently the latest version. Upgrade your version accordingly.
 *
 * The code is written all in the index.js and the app.js, to files that should be rather clean.
 * Instead of gathering all code at just a few places, take advantage of react components and use your code as
 * buildingblocks that you put together.
 * In other words. Create a components folder inside the src folder, and within your component-folder create new
 * folders and files that holds their own component. Like form, watchlist, watchMovies and so on.
 * Tie this files together in your app.js file.
 */

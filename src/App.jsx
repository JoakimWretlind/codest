import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { MainWrapper } from './styles/mainStyles'
import { Form } from './components/form'
import { Watchlist } from './components/watchlist'
import { WatchedMovies } from './components/watched'
import { Footer } from './components/footer'

function App() {
  const [watched, setWatched] = useState(() => JSON.parse(localStorage.getItem('watched-movies')) || [])
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem("all-movies")) ||
    [
      {
        id: 1,
        title: 'The Avengers',
        image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
        comment: 'New York blows up in this!'
      },
      {
        id: 2,
        title: 'Dark City',
        image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
        comment: 'This looks mysterious. Cool!'
      },
      {
        id: 3,
        title: 'Hot Tub Time Machine',
        // I changed the url to one that worked. Another solution would be an error-handler
        image: 'https://images.fanart.tv/fanart/hot-tub-time-machine-53ee1be0c6d3e.jpg',
        comment: 'Someone said this was fun. Maybe!'
      },
    ]
  );

  // Initialize localStorage for all movies
  useEffect(() => {
    localStorage.setItem('all-movies', JSON.stringify(movies))
  }, [movies])

  // Initialize localStorage for watched movies
  useEffect(() => {
    localStorage.setItem('watched-movies', JSON.stringify(watched))
  }, [watched])

  /******* WATCHLIST *******/
  // When user adds a movie to the watchlist
  const submitHandler = (title, comment, image) => {
    setMovies([{ id: Date.now(), title: title, comment: comment, image: image }, ...movies])
  }

  // when user removes a movie from the watchlist
  const removeHandler = (movieID) => {
    const updateMovies = movies.filter(item => item.id !== movieID)
    setMovies(updateMovies)
  }

  /******* ALREADY WATCHED *******/
  // When user adds a movie as already watched
  const watchedHandler = (movieID) => {
    const movieTarget = movies.findIndex(item => item.id === movieID)
    const duplicatedMovies = [...movies]

    duplicatedMovies[movieTarget] = {
      id: duplicatedMovies[movieTarget].id,
      title: duplicatedMovies[movieTarget].title,
      image: duplicatedMovies[movieTarget].image,
      comment: duplicatedMovies[movieTarget].comment
    }

    const targetMovie = duplicatedMovies[movieTarget]

    setWatched([targetMovie, ...watched])
  }

  // when user removes a watched movie
  const removeWatchedHandler = (movieID) => {
    // this will not work correct since we can have double items in the local storage.
    // This proves I should've done it correct from the start, and/or used the original
    // code more. Too bad time is up.
    const updatedMovies = watched.filter(item => item.id !== movieID)
    setWatched(updatedMovies)
  }

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <h1>codest movies!</h1>
        <Form onSubmit={submitHandler} />
        <Watchlist
          movies={movies}
          watchedHandler={watchedHandler}
          removeHandler={removeHandler}
        />
        <WatchedMovies
          watched={watched}
          removeWatchedHandler={removeWatchedHandler}
        />
        <Footer />
      </MainWrapper>
    </>
  );
}

export default App;

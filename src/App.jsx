import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { MainWrapper } from './styles/mainStyles'
import { Form } from './components/form'
import { Watchlist } from './components/watchlist'
import { WatchedMovies } from './components/watched'
function App() {
  // Get items from localStrage
  const [watched, setWatched] = useState(() => JSON.parse(localStorage.getItem('watched-movies'))) // rewriting the getWatchedMovies function
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('all-movies')) ||
    // rewrote the getAllMovies in the same style as the getWatchedMovies.
    // Added an id, and changed the url for the last object.
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
        image: 'https://images.fanart.tv/fanart/hot-tub-time-machine-53ee1be0c6d3e.jpg',
        comment: 'Someone said this was fun. Maybe!'
      },
    ]
  )

  // When user adds a movie to the watchlist
  const submitHandler = (title, comment, image) => {
    setMovies([{ id: Date.now(), title: title, comment: comment, image: image }, ...movies])
  }

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <h1>codest movies!</h1>
        <Form onSubmit={submitHandler} />
        <Watchlist
          movies={movies}
        />
        <WatchedMovies />
      </MainWrapper>
    </>
  );
}

export default App;

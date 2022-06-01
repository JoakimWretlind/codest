
import { GlobalStyle } from './styles/globalStyle'
import { MainWrapper } from './styles/mainStyles'
import { Form } from './components/form'
import { Watchlist } from './components/watchlist'
import { WatchedMovies } from './components/watched'
function App() {

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <h1>codest movies!</h1>
        <Form />
        <Watchlist />
        <WatchedMovies />
      </MainWrapper>
    </>
  );
}

export default App;

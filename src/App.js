import './App.css';
import MovieList from './MovieList'
import Nav from './Nav'
import {MovieProvider} from './MoviesContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
    
  );
}

export default App;

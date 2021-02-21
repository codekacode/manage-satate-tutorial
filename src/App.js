import './App.css';
import MovieList from './MovieList'
import Nav from './Nav'
import AddMovie from './AddMovies'
import {MovieProvider} from './MoviesContext'


function App() {
  return (
    <MovieProvider>
      <div className="app">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
    
  );
}

export default App;

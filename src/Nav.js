import React, {useContext} from 'react';
import {MovieContext} from './MoviesContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h3>Codeka</h3>
            <p>List of movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
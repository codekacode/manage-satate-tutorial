import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price: 'S/.25.00',
            id: 2312
        },
        {
            name: 'Game of Thrones',
            price: 'S/.29.00',
            id: 23244
        },
        {
            name: 'Inception',
            price: 'S/.20.00',
            id: 28778
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};


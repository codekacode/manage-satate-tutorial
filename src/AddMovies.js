import React, {useState, useContext} from 'react';
import {MovieContext} from './MoviesContext'

const AddMovie  = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    };

    return (
        <form onSubmit={addMovie} className="form">
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={updateName} 
                className="form__input"
                placeholder="Name" />
            <input 
                type="text" 
                name="price" 
                value={price} 
                onChange={updatePrice} 
                className="form__input"
                placeholder="Price" />
            <button className="btn" >Submit</button>
        </form>
    )
};

export default AddMovie
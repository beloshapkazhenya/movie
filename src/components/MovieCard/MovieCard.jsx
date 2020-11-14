import React from 'react';
import { Link } from "react-router-dom";

import './MovieCard.scss';

const MovieCard = ({ Title, Year, Poster, imdbID, setMovieData }) => {
    return (
        <Link to='/movie-description' >
            <div onClick={() => setMovieData(imdbID)} className='movie-card'>
                <img src={Poster} alt=':('></img>
                <div className='movie-card__description'>
                    <h2 className='movie-card__description__title'>{Title}</h2>
                    <div className='movie-card__description__year'>{Year}</div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;
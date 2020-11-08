import React from 'react';

import './MovieCard.scss';

const MovieCard = ({ Title, Year, Poster, imdbID, setMovieData }) => {
    return (
        <div onClick={() => setMovieData(imdbID)} className='movie-card'>
            <img src={Poster} alt=':('></img>
            <div className='movie-card__description'>
                <h2 className='movie-card__description__title'>{Title}</h2>
                <div className='movie-card__description__year'>{Year}</div>
            </div>
        </div>
    )
}

export default MovieCard;
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import defaultPoster from './../../assets/img/poster.png'



import './Favorites.scss';

const Favorites = ({ setMovieData, favoriteList }) => {
    return (
        <div className="movie-app__favorites">
            <div className="movie-app__favorites__movie-field">
                {favoriteList.map(movie => (
                    <MovieCard key={movie.imdbID}
                        Title={movie.Title}
                        Year={movie.Year}
                        Poster={movie.Poster !== "N/A" ? movie.Poster : defaultPoster}
                        imdbID={movie.imdbID}
                        setMovieData={setMovieData}
                    />)
                )}
            </div>


        </div>
    )
}

export default Favorites;
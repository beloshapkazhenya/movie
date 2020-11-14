import React from 'react';

import defaultPoster from './../../assets/img/poster.png'
import addFavorites from './../../assets/img/favorites.svg'
import inFavorites from './../../assets/img/infavorites.svg'

import './Movie.scss';

const Movie = ({ description, favoriteListAdd }) => {
    return (
        <div className='movie-app__movie-description-field'>
            <div className='movie-app__movie-description-field__title'>
                <h1>{description.Title}</h1>
                <img className='in-favorite' onClick={() => favoriteListAdd(description)} src={inFavorites} alt="Favorite"></img>
            </div>

            <div className='movie-app__movie-description-field__information'>
                {description.Poster && <img className='movie-app__movie-description-field__information__poster' src={description.Poster !== "N/A" ? description.Poster : defaultPoster} alt='Poster'></img>}
                <div className='movie-app__movie-description-field__information__text-information'>
                    {description.Genre && description.Genre !== "N/A" ? <div className='movie-app__movie-description-field__information__genre'><span>Genre: </span>{description.Genre}</div> : null}
                    {description.Countru && description.Countru !== "N/A" ? <div className='movie-app__movie-description-field__information__country'><span>Country: </span>{description.Countru}</div> : null}
                    {description.Runtime && description.Runtime !== "N/A" ? <div className='movie-app__movie-description-field__information__runtime'><span>Runtime: </span>{description.Runtime}</div> : null}
                    {description.Year && description.Year !== "N/A" ? <div className='movie-app__movie-description-field__information__year'><span>Year: </span>{description.Year}</div> : null}
                    {description.Released && description.Released !== "N/A" ? <div className='movie-app__movie-description-field__information__released'><span>Released: </span>{description.Released}</div> : null}
                    {description.Production && description.Production !== "N/A" ? <div className='movie-app__movie-description-field__information__production'><span>Production: </span>{description.Production}</div> : null}
                    {description.Director && description.Director !== "N/A" ? <div className='movie-app__movie-description-field__information__director'><span>Director: </span>{description.Director}</div> : null}
                    {description.Writer && description.Writer !== "N/A" ? <div className='movie-app__movie-description-field__information__writer'><span>Writer: </span>{description.Writer}</div> : null}
                    {description.Actors && description.Actors !== "N/A" ? <div className='movie-app__movie-description-field__information__actors'><span>Actors: </span>{description.Actors}</div> : null}
                    {description.Awards && description.Awards !== "N/A" ? <div className='movie-app__movie-description-field__information__awards'><span>Awards: </span>{description.Awards}</div> : null}
                </div>
            </div>
            {description.Plot && description.Plot !== "N/A" ? <div className='movie-app__movie-description-field__description'>{description.Plot}</div> : null}
        </div >
    )
}

export default Movie;
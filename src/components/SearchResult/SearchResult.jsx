import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './../MovieCard/MovieCard'
import defaultPoster from './../../assets/img/poster.png'


import './SearchResult.scss';

const SearchResult = ({ searchResult, setMovieData, searchValue, nextSearchPage }) => {
    const slider = useRef(null)
    const [loading, setLoading] = useState(false)

    const buttonScroll = (e) => {
        const sliderBlock = slider.current
        let scrollSize = sliderBlock.clientWidth
        if (e.currentTarget.getAttribute('id') === 'prew') scrollSize = -scrollSize
        sliderBlock.scrollBy({ left: scrollSize, top: 0, behavior: "smooth" })
    }
    const scrollFunction = () => {
        if (slider.current.scrollWidth - (slider.current.scrollLeft + slider.current.clientWidth) < slider.current.clientWidth && !loading) {
            setLoading(true)
            nextSearchPage();
            setTimeout(() => setLoading(false), 2000)
        }
    }

    useEffect(() => {
        const sliderBlock = slider.current
        sliderBlock.scrollTo({ left: 0, top: 0, behavior: "smooth" })
    }, [searchValue])

    return (
        <div className='movie-app__search__search-result-field'>
            <div className='navigation' >
                <button id='prew' onClick={buttonScroll}>Prew</button>
                <button id='next' onClick={buttonScroll}>Next</button>
            </div>
            <div className='carousel' ref={slider} onScroll={scrollFunction}>
                {searchResult && searchResult.map(movie => (
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

export default SearchResult;
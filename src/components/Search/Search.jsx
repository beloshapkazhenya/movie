import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

import searchBtn from './../../assets/img/search.svg'
import './Search.scss';

const Search = ({ setSearchValue, searchValue, response, searchResult, searchButtonFunction, setMovieData, nextSearchPage }) => {
    return (
        <div className='movie-app__search'>
            <div className='movie-app__search__search-field'>
                <div>
                    <input type='text' placeholder='Type name of movie' value={searchValue} onChange={e => setSearchValue(e.target.value)} ></input>
                    <button onClick={searchButtonFunction} className='movie-app__search__search-field__btn'>
                        <img src={searchBtn} alt="Search" />
                    </button>
                </div>

            </div>
            {response && <SearchResult
                setMovieData={setMovieData}
                nextSearchPage={nextSearchPage}
                searchValue={searchValue}
                searchResult={searchResult} />}
        </div>
    )
}

export default Search;
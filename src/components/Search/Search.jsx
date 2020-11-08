import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

import './Search.scss';

const Search = ({ setSearchValue, searchValue, response, searchResult, searchButtonFunction, setMovieData, nextSearchPage }) => {
    return (
        <div className='movie-app__search'>
            <div className='movie-app__search__search-field'>
                <input type='text' placeholder='Search' value={searchValue} onChange={e => setSearchValue(e.target.value)} ></input>
                <div onClick={searchButtonFunction} className='movie-app__search__search-field__btn'>Search</div>
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
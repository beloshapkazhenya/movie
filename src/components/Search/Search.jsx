import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

import searchBtn from './../../assets/img/search.svg'
import './Search.scss';

const Search = ({ searchActions, movieDescription }) => {
    let classNameSearch = () => {
        if (movieDescription) {
            return 'movie-app__search__search-field search-active'
        } else if (!!searchActions.response) {
            return 'movie-app__search__search-field search-active-animation'
        } else {
            return 'movie-app__search__search-field'
        }
    }
    return (
        <div className='movie-app__search'>
            <div className={classNameSearch()}>
                <div>
                    <input type='text' placeholder='Type name of movie' value={searchActions.searchValue} onChange={e => searchActions.setSearchValue(e.target.value)} ></input>
                    <button onClick={searchActions.searchButtonFunction} className='movie-app__search__search-field__btn'>
                        <img src={searchBtn} alt="Search" />
                    </button>
                </div>
            </div>
            {searchActions.response && <SearchResult
                setMovieData={searchActions.setMovieData}
                nextSearchPage={searchActions.nextSearchPage}
                searchValue={searchActions.searchValue}
                searchResult={searchActions.searchResult} />}
        </div>
    )
}

export default Search;
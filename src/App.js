import React, { useState, useEffect } from 'react';
import { API } from './state/api'
import { Header, Movie, Search, Popup } from './components/components'

function App() {
  const [visibleSearch, setVisibleSearch] = useState(true);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [movie, setMovie] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [response, setResponse] = useState('');
  const [searchPage, setSearchPage] = useState(1);

  const clearSearch = () => {
    setVisibleSearch(false)
    setSearchValue('')
    setSearchResult([])
    setResponse('')
    setSearchPage(1)
  }

  //просмотр данных фильма
  const setMovieData = (imdbID) => {
    API.getMovieById(imdbID).then(data => setMovie(data))
    clearSearch()
  }

  //появление/скрытие полей

  let searchVisibilaty = () => {
    setVisibleSearch(!visibleSearch)
  }

  let popupVisibilaty = () => {
    setVisiblePopup(!visiblePopup)
  }

  //поиск фильма
  let searchFunction = () => {
    API.getSearchList(searchValue, searchPage).then(({ data }) => {
      if (data.Response === "True") {
        setSearchResult([...searchResult, ...data.Search])
        setResponse(data.Response)
        setSearchPage(searchPage + 1)
      } else {
        setSearchResult([])
        setResponse('')
        popupVisibilaty()
      }
    })
  }
  let searchButtonFunction = () => {
    searchResult.length = 0
    searchFunction();
  }

  let nextSearchPage = () => {
    searchFunction()
  }
  useEffect(() => {
    setSearchPage(1)
  }, [searchValue])

  const searchActions = {
    setSearchValue,
    searchValue,
    searchButtonFunction,
    searchResult,
    nextSearchPage,
    response,
    setMovieData
  }

  return (
    <div className="movie-app">
      <Header searchVisibilaty={searchVisibilaty} clearSearch={clearSearch} />
      {visiblePopup && <Popup popupVisibilaty={popupVisibilaty} />}
      {visibleSearch && <Search
        searchActions={searchActions} />}
      <Movie description={movie} />
    </div>
  );
}

export default App;
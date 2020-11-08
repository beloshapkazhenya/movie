import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search';
import Popup from './components/Popup/Popup';


function App() {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [movie, setMovie] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [response, setResponse] = useState('');
  const [searchPage, setSearchPage] = useState(1);




  const setMovieData = (imdbID) => {
    axios.get(`https://www.omdbapi.com/?apikey=ea6e1810&i=${imdbID}`).then(({ data }) => { setMovie(data) })
    searchVisibilaty()
    setSearchValue('')
    setSearchResult([])
    setResponse('')
    setSearchPage(1)
  }

  let searchVisibilaty = () => {
    setVisibleSearch(!visibleSearch)
  }

  let popupVisibilaty = () => {
    setVisiblePopup(!visiblePopup)
  }


  let searchFunction = () => {
    axios.get(`https://www.omdbapi.com/?apikey=ea6e1810&s=${searchValue}&page=${searchPage}`).then(({ data }) => {
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

  return (
    <div className="movie-app">
      <Header searchVisibilaty={searchVisibilaty} />
      {visiblePopup && <Popup popupVisibilaty={popupVisibilaty} />}
      {visibleSearch && <Search
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        searchButtonFunction={searchButtonFunction}
        searchResult={searchResult}
        nextSearchPage={nextSearchPage}
        response={response}
        setMovieData={setMovieData} />}
      <Movie description={movie} />

    </div>
  );
}

export default App;

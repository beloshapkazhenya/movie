import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios'

import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search';
import Popup from './components/Popup/Popup';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [movie, setMovie] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [response, setResponse] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [favoriteList, setFavoriteList] = useState([])

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
  let favoriteListAdd = (addMovie) => {
    setFavoriteList([...favoriteList, addMovie])
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
      <Route exact path="/">
        <Home />
      </Route>
      {visiblePopup && <Popup popupVisibilaty={popupVisibilaty} />}
      {visibleSearch && <Search
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        searchButtonFunction={searchButtonFunction}
        searchResult={searchResult}
        nextSearchPage={nextSearchPage}
        response={response}
        setMovieData={setMovieData} />}
      <Route path='/movie-description'>
        <Movie description={movie} favoriteListAdd={favoriteListAdd} />
      </Route>
      <Route path='/favorites'>
        <Favorites setMovieData={setMovieData} favoriteList={favoriteList} />
      </Route>

    </div>
  );
}

export default App;

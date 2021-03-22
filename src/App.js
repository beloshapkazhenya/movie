import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { API } from './state/api'
import { Header, Movie, Search, Popup, Home, Profile } from './components/components'
import defaultAva from './assets/img/base avatar.png'

function App() {
  const [visibleSearch, setVisibleSearch] = useState(false);
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

  //действия с избранным
  const [favoriteList, setFavoriteList] = useState([])
  const [favoriteListDate, setFavoriteListDate] = useState(localStorage.favoriteListDate ? localStorage.favoriteListDate.split(',') : [])
  let favoriteListAction = (Movie) => {
    setFavoriteListDate([...favoriteListDate, Movie.imdbID])
  }
  console.log(favoriteList)
  let favoriteListRefresh = () => {
    favoriteListDate.map(movieID => (
      API.getMovieById(movieID).then(data => (
        setFavoriteList([...favoriteList, data])
      ))))
  }

  useEffect(() => {
    localStorage.setItem('favoriteListDate', favoriteListDate)
    favoriteListRefresh()
  }, [favoriteListDate])

  //данные профиля
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [usernamePopup, setUsernamePopup] = useState(false);

  const [newAvatarPath, setNewAvatarPath] = useState()
  const [userAvatar, setUserAvatar] = useState(localStorage.avatar ? localStorage.avatar : defaultAva)


  const [newUsername, setNewUsername] = useState()
  const [username, setUsername] = useState(localStorage.username ? localStorage.username : 'Username')

  let changeAvatarPopup = () => {
    setUsernamePopup(false)
    setNewAvatarPath()
    setAvatarPopup(!avatarPopup)
  }
  let changeUsernamePopup = () => {
    setAvatarPopup(false)
    setNewUsername()
    setUsernamePopup(!usernamePopup)
  }

  let changeAvatar = () => {
    setUserAvatar(newAvatarPath)
    localStorage.setItem('avatar', newAvatarPath)
    changeAvatarPopup()
  }
  let changeUsername = () => {
    setUsername(newUsername)
    localStorage.setItem('username', newUsername)
    changeUsernamePopup()
  }

  const profileActions = {
    changeAvatarPopup,
    avatarPopup,
    userAvatar,
    setNewAvatarPath,
    newAvatarPath,
    changeAvatar,
    newUsername,
    setNewUsername,
    username,
    usernamePopup,
    changeUsername,
    changeUsernamePopup,
    setMovieData,
    favoriteList
  }

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
      <Route exact path="/">
        <Home username={localStorage.username} />
      </Route>
      {visiblePopup && <Popup popupVisibilaty={popupVisibilaty} />}
      {visibleSearch && <Search
        searchActions={searchActions} />}
      <Route path='/movie-description'>
        <Movie description={movie} favoriteListAction={favoriteListAction} />
      </Route>
      <Route path='/profile'>
        <Profile
          profileActions={profileActions}
        />
      </Route>

    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { API } from './state/api'
import { Header, Movie, Search, Popup, Home, Favorites, Profile } from './components/components'
import defaultAva from './assets/img/base avatar.png'

function App() {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [movie, setMovie] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [response, setResponse] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [favoriteList, setFavoriteList] = useState([])


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
  let favoriteListAdd = (addMovie) => {
    setFavoriteList([...favoriteList, addMovie])
  }
  //данные профиля

  let userInfo = {
    username: "Username",
    avatar: defaultAva
  }
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [usernamePopup, setUsernamePopup] = useState(false);

  const [newAvatarPath, setNewAvatarPath] = useState()
  const [userAvatar, setUserAvatar] = useState(userInfo.avatar)


  const [newUsername, setNewUsername] = useState()
  const [username, setUsername] = useState(userInfo.username)

  let changeAvatarPopup = () => {
    setUsernamePopup(false)
    setNewUsername()
    setAvatarPopup(!avatarPopup)
  }
  let changeUsernamePopup = () => {
    setAvatarPopup(false)
    setNewAvatarPath()
    setUsernamePopup(!usernamePopup)
  }

  let changeAvatar = () => {
    setUserAvatar(newAvatarPath)
    userInfo.avatar = newAvatarPath
    changeAvatarPopup()
  }
  let changeUsername = () => {
    setUsername(newUsername)
    userInfo.avatar = newUsername
    changeUsernamePopup()
  }



  return (
    <div className="movie-app">
      <Header searchVisibilaty={searchVisibilaty} clearSearch={clearSearch} />
      <Route exact path="/">
        <Home userInfo={userInfo} />
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
      <Route path='/profile'>
        <Profile
          changeAvatarPopup={changeAvatarPopup}
          avatarPopup={avatarPopup}
          userAvatar={userAvatar}
          setNewAvatarPath={setNewAvatarPath}
          newAvatarPath={newAvatarPath}
          changeAvatar={changeAvatar}
          newUsername={newUsername}
          setNewUsername={setNewUsername}
          username={username}
          usernamePopup={usernamePopup}
          changeUsername={changeUsername}
          changeUsernamePopup={changeUsernamePopup}
        />
      </Route>

    </div>
  );
}

export default App;

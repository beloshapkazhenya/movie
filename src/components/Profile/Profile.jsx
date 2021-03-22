import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import defaultPoster from './../../assets/img/poster.png'

import './Profile.scss';

import Avatar from './Avatar'


const Profile = ({ profileActions }) => {
    //console.log(profileActions.favoriteList)
    return (
        <div className='profile-page'>
            <div className='movie-app__profile'>
                <Avatar userAvatar={profileActions.userAvatar} changeAvatarPopup={profileActions.changeAvatarPopup} />
                {profileActions.avatarPopup && <div className='movie-app__profile__popup'>
                    <input value={profileActions.newAvatarPath} placeholder='Insert link to image' onChange={e => profileActions.setNewAvatarPath(e.target.value)} type="text"></input>
                    <button onClick={profileActions.changeAvatar}>Change</button>
                </div>}
                <div className="movie-app__profile__username">
                    <span onClick={() => profileActions.changeUsernamePopup()} >{profileActions.username}</span>
                </div>
                {profileActions.usernamePopup && <div className='movie-app__profile__popup'>
                    <input value={profileActions.newUsername} placeholder='How can I call you?' onChange={e => profileActions.setNewUsername(e.target.value)} type="text"></input>
                    <button onClick={profileActions.changeUsername}>Change</button>
                </div>}
            </div >
            <div className="movie-app__favorites">
                <h2 className='movie-app__favorites__title'>Favorites</h2>
                <div className="movie-app__favorites__movie-field">
                    {profileActions.favoriteList.map(movie => (
                        <MovieCard key={movie.imdbID}
                            Title={movie.Title}
                            Year={movie.Year}
                            Poster={movie.Poster !== "N/A" ? movie.Poster : defaultPoster}
                            imdbID={movie.imdbID}
                            setMovieData={profileActions.setMovieData}
                        />)
                    )}
                </div>
            </div>
        </div>

    )
}

export default Profile;
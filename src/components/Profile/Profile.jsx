import React from 'react';

import './Profile.scss';

import Avatar from './Avatar'


const Profile = ({ changeAvatarPopup, avatarPopup, setNewAvatarPath, newAvatarPath, changeAvatar, userAvatar, newUsername, setNewUsername, username, usernamePopup, changeUsernamePopup, changeUsername }) => {

    return (
        <div className='movie-app__profile'>
            <Avatar userAvatar={userAvatar} changeAvatarPopup={changeAvatarPopup} />
            {avatarPopup && <div className='movie-app__profile__popup'>
                <input value={newAvatarPath} placeholder='Insert link to image' onChange={e => setNewAvatarPath(e.target.value)} type="text"></input>
                <button onClick={changeAvatar}>Change</button>
            </div>}
            <div className="movie-app__profile__username">
                <span onClick={() => changeUsernamePopup()} >{username}</span>
            </div>
            {usernamePopup && <div className='movie-app__profile__popup'>
                <input value={newUsername} placeholder='How can I call you?' onChange={e => setNewUsername(e.target.value)} type="text"></input>
                <button onClick={changeUsername}>Change</button>
            </div>}

        </div >
    )
}

export default Profile;
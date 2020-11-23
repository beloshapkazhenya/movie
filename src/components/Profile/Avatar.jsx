import React, { useState, useEffect } from 'react';

import './Profile.scss';

import edit from './../../assets/img/edit.svg'

const Avatar = ({ userAvatar, changeAvatarPopup }) => {
    const [avatar, setAvatar] = useState(userAvatar)
    useEffect(() => {
        setAvatar(userAvatar)
    }, [userAvatar])
    return (
        <div className='movie-app__profile__avatar-field'>
            <img src={avatar} alt="Here must be avatar"></img>
            <img src={edit} alt="Edit" onClick={() => changeAvatarPopup()}></img>
        </div>
    )
}

export default Avatar;
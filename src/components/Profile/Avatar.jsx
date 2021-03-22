import React, { useState, useEffect } from 'react';

import './Profile.scss';


const Avatar = ({ userAvatar, changeAvatarPopup }) => {
    const [avatar, setAvatar] = useState(userAvatar)
    useEffect(() => {
        setAvatar(userAvatar)
    }, [userAvatar])
    return (
        <div className='movie-app__profile__avatar-field'>
            <img src={avatar} alt="Here must be avatar" onClick={() => changeAvatarPopup()}></img>
        </div>
    )
}

export default Avatar;
import React from 'react';

import close from './../../assets/img/cross.svg'

import './Popup.scss';

const Popup = ({ popupVisibilaty }) => {
    return (
        <div className='movie-app__popup'>
            <button onClick={popupVisibilaty}><img src={close} alt="Close" /></button>
            <span>We are sorry!!!</span>
            <span>We couldn't find the movie you want.</span>
            <span>Check that the name is correct.</span>
        </div >
    )
}

export default Popup;
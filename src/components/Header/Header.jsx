import React from 'react';

import Logo from './../../assets/img/Logo.svg'

import './Header.scss';

const Header = ({ searchVisibilaty, movieDescription }) => {
    return (
        <header className='movie-app__header'>
            <img src={Logo} alt='Movie library'></img>
            {movieDescription && <ul className='movie-app__header__menu'>
                <li onClick={searchVisibilaty} className='movie-app__header__menu__menu-button'>Search</li>
            </ul>}

        </header>
    )
}

export default Header;
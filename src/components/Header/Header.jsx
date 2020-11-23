import React from 'react';
import { Link } from "react-router-dom";

import Logo from './../../assets/img/Logo.svg'

import './Header.scss';

const Header = ({ searchVisibilaty }) => {
    return (
        <header className='movie-app__header'>
            <img src={Logo} alt='Movie library'></img>
            <ul className='movie-app__header__menu'>
                <Link to="/"><li className='movie-app__header__menu__menu-button'>Main</li></Link>
                <li onClick={searchVisibilaty} className='movie-app__header__menu__menu-button'>Search</li>
                <Link to="/favorites" ><li className='movie-app__header__menu__menu-button'>Favorites</li></Link>
                <Link to="/profile"><li className='movie-app__header__menu__menu-button'>Profile</li></Link>
            </ul>
        </header>
    )
}

export default Header;
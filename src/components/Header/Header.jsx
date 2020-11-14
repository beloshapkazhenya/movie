import React from 'react';
import { Link } from "react-router-dom";

import Logo from './../../assets/img/Logo.svg'

import './Header.scss';

const Header = ({ searchVisibilaty }) => {
    return (
        <header className='movie-app__header'>
            <img src={Logo} alt='Movie library'></img>
            <ul className='movie-app__header__menu'>
                {/*<li className='movie-app__header__menu__menu-button'>Main</li>*/}
                {/*<li className='movie-app__header__menu__menu-button'>Top</li>*/}
                {/*<li className='movie-app__header__menu__menu-button'>Proposed</li>*/}
                <li onClick={searchVisibilaty} className='movie-app__header__menu__menu-button'>Search</li>
                <Link to="/favorites" ><li className='movie-app__header__menu__menu-button'>Favorites</li></Link>
                {/*<li className='movie-app__header__menu__menu-button'>Profile</li>*/}
            </ul>
        </header>
    )
}

export default Header;
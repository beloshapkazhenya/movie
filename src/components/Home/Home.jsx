import React from 'react';

import './Home.scss';

const Home = ({ userInfo }) => {

    if (userInfo.username === "Username") {
        return (
            <div className="movie-app__home">
                <div className="movie-app__home__text-block">
                    <span>Hello!!!</span>
                    <span>I see you for the first time, but really want to meet you!</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="movie-app__home">
                <div className="movie-app__home__text-block">
                    <span>Hello, {userInfo.username} !!!</span>
                    <span>Do you want to learn something new about films?</span>
                </div>
            </div>
        )
    }



}

export default Home;
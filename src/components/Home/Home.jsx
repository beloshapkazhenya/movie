import React from 'react';

import './Home.scss';

const Home = ({ userInfo }) => {
    return (
        <div className="movie-app__home">
            <div className="movie-app__home__text-block">
                {(userInfo.username === "Username")
                    ? <span>Hello!!!</span>
                    : <span>Hello, {userInfo.username} !!!</span>}
                {(userInfo.username === "Username")
                    ? <span>I see you for the first time, but really want to meet you!</span>
                    : <span>Do you want to learn something new about films?</span>}
            </div>

        </div>
    )
}

export default Home;
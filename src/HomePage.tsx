import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                BUGJIRA
            </h1>
            <p>
                Squash development bugs like a mighty kaiju.
            </p>
            <Link to='tasks'>See Tasks</Link>
        </header>
    );
}

export default HomePage;
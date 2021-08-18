import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './Header.css';

export const Header = () => (
    <header className="App-header">
        <div className="top-header-row">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Conway's Game of Life</h1>
        </div>
        <div className="header-menu-row">
            <div className="header-link"><NavLink exact to="/">Home</NavLink></div>
            <div className="header-link"><NavLink to="/game">Game</NavLink></div>
        </div>
    </header>
)

export default Header;

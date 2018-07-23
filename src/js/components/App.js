import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import logo from '../../assets/logo.svg';
import '../../css/App.css';

import Home from './Home';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Conway's Game of Life</h1>
          <img src={logo} className="App-logo" alt="logo" />

          <ul className="header-menu">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/game">Game</NavLink></li>
          </ul>
        </header>

        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/game" component={Game}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;

import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';

import './App.css';

const App = () => (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/" component={HomePage}/>
          <Route path="/game" component={GamePage}/>
        </div>
      </div>
    </HashRouter>
)

export default App;

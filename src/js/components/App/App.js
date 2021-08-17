import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';

import './App.css';

const App = () => (
    <HashRouter>
      <div className="App">
        <Header />
        <Container className="content">
          <Route exact path="/" component={HomePage}/>
          <Route path="/game" component={GamePage}/>
        </Container>
      </div>
    </HashRouter>
)

export default App;

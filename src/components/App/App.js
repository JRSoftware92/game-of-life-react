import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';

import './App.css';

const App = () => (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container className="content">
            <Switch>
                <Route path="/game" component={GamePage}/>
                <Route bpath="/" component={HomePage}/>
            </Switch>
        </Container>
      </div>
    </BrowserRouter>
)

export default App;

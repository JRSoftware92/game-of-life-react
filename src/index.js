import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import gridReducer from "./js/grid/GridReducer";

import App from './js/App';

import './css/index.css';

var destination = document.getElementById('root');

// Store
var store = createStore(gridReducer);

var rootElement = <Provider store={store}><App /></Provider>

ReactDOM.render(rootElement, destination);

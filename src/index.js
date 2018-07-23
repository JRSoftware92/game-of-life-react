import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import gridReducer from "./js/reducers/GridReducer";
import gridUtils from "./js/utils/GridUtils";

import App from './js/components/App';

import './css/index.css';

var destination = document.getElementById('root');

const initialGridState = {
    height: 4,
    width: 4,
    grid: gridUtils.emptyGrid(4, 4)
}

// Store
var store = createStore(gridReducer, initialGridState);

var rootElement = <Provider store={store}><App /></Provider>

ReactDOM.render(rootElement, destination);

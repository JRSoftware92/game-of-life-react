import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import gridReducer from "./js/reducers/GridReducer";
import gridUtils from "./js/utils/GridUtils";
import { Conway } from "./js/engine/PresetRules";

import App from './js/components/App/App';

import './css/index.css';

var destination = document.getElementById('root');

const initialGridState = {
    height: 16,
    width: 48,
    density: 50,
    grid: gridUtils.emptyGrid(16, 48),
    selectedRule: Conway
}

// Store
var store = createStore(gridReducer, initialGridState);

var rootElement = <Provider store={store}><App /></Provider>

ReactDOM.render(rootElement, destination);

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gridReducer from './js/reducers/GridReducer';
import gridUtils from './js/utils/GridUtils';
import PresetRules from './data/preset-rules.json';

import App from './js/components/App/App';

import './css/index.css';

const destination = document.getElementById('root');

const initialGridState = {
    height: 16,
    width: 48,
    density: 50,
    grid: gridUtils.emptyGrid(16, 48),
    selectedRule: PresetRules[0]
}

// Store
const store = createStore(gridReducer, initialGridState);

const rootElement = <Provider store={store}><App /></Provider>

ReactDOM.render(rootElement, destination);

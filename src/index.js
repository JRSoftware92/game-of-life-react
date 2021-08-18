import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gridReducer from './js/reducers/GridReducer';

import App from './js/components/App/App';

import './css/index.css';

const destination = document.getElementById('root');

// Store
const store = createStore(gridReducer);

const rootElement = <Provider store={store}><App /></Provider>

ReactDOM.render(rootElement, destination);

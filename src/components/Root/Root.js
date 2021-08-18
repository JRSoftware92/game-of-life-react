import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gridReducer from '../../reducers/GridReducer';

import App from '../App/App';

import './Root.css';

export const Root = () => {
    const store = createStore(gridReducer);
    return (
        <Provider store={store}><App /></Provider>
    );
};

export default Root;

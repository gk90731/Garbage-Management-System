import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './core/reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
export default ReactDOM.render(<Provider store={store}>
                                <Routes />
                               </Provider>, document.getElementById('app'))

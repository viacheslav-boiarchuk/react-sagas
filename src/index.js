import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { configureStore } from './store';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { AppConnector } from './connector';

export const history = createBrowserHistory();
const AppConnected = AppConnector(App);

ReactDOM.render(
    <Provider store={ configureStore() }>
        <Router history={ history }>
            <AppConnected/>
        </Router>
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

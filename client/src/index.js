import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './shared/Firebase';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <App />
        </Provider>
    </FirebaseContext.Provider>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

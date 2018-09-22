import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import throttle from 'lodash/throttle';

import reducer from './store';
import {loadState, saveState} from './localState'

const middleware = composeWithDevTools(applyMiddleware(loggingMiddleware));
const persistedState = loadState()
const store = createStore(reducer,persistedState, middleware);

//throttle will write to store at most once a sec - https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
store.subscribe(throttle(()=>{
  saveState({
    lat:store.getState().lat,
    lng:store.getState().lng,
    address:store.getState().address  
  })
}),1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

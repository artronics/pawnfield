import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();

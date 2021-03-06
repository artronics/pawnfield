import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import theme from './utils/theme';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();

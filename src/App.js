import React, { PureComponent } from 'react';
import {Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Button from 'material-ui/Button';
import HomePage from './containers/Homepage';
import Login from './containers/Login';
import Pawnfield from './containers/Pawnfield';
import NotFoundPage from './containers/NotFoundPage';

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/login" component={Login}/>
    <Route path="/app" component={Pawnfield}/>
    <Route component={NotFoundPage}/>
  </Switch>
);
class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <AppRoute />
      </div>
    );
  }
}

App.propTypes = {
}

export {
  AppRoute,
};
export default App;

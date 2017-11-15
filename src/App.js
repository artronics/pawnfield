import React, { PureComponent } from 'react';
import {Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from 'containers/Homepage';
import LoginPage from 'containers/Login/LoginPage';
import Pawnfield from 'containers/Pawnfield';
import NotFoundPage from 'containers/NotFoundPage';

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/login" component={LoginPage}/>
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
export default withRouter(connect()(App));

import React from 'react';
import { connect } from 'react-redux';
import configureStore from 'redux-mock-store';

// TODO: write unit tests for Tab Hoc
// all my attempts to write test failed. there is no way to get inside
// wrapped component

class Foo extends React.Component {
  render() {
    return (
        <div>some component</div>
    );
  }
}

function connectWithStore(store, WrappedComponent, ...args) {
  const ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return (<ConnectedWrappedComponent {...props} store={store}/>);
  };
}

describe('Tab HOC', () => {
  const mockStore = configureStore([])({});
  describe('render', () => {
    const tabs = {
      '/': {to: '/app/foo', label: 'FOO'},
    };
    it('should render the Tab component', () => {
    });
  });
});

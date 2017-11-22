import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addResource, getResource as getResourceAction } from './state';

export const DataSource = (name) => (WrappedComponent) => {
  return class DataSourceHoc extends React.Component {
    componentWillMount() {
      this.props.addResource(name);
    }
    render() {
      const {getResource} = this.props;
      return (<WrappedComponent
          {...this.props}
          getResource={getResource(name)}
      />);
    }

    static propTypes = {
      getResource: PropTypes.func.isRequired,
      addResource: PropTypes.func.isRequired,
    };
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    getResource: resourceName => options => dispatch(
        getResourceAction(resourceName, options)),
    addResource: resourceName => dispatch(addResource(resourceName)),
  };
}

export function mapStateToProps(state) {
  return {
    state,
  };
}

export default name => WrappedComponent =>
    connect(mapStateToProps, mapDispatchToProps)(
        DataSource(name)(WrappedComponent));

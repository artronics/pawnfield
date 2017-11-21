import React from 'react';
import { connect } from 'react-redux';
import { getResource as getResourceAction } from './state';

export class BaseDataSource extends React.Component {
  render() {
    return (<div></div>);
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getResource: resourceName => options => dispatch(
        getResourceAction(resourceName, options)),
  };
}

export function mapStateToProps(state) {
  return {
    state,
  };
}

export const DataSource = (name) => (WrappedComponent) => {
  class DataSourceHoc extends BaseDataSource {
    render() {
      const {getResource} = this.props;
      return (<WrappedComponent
          {...this.props}
          getResource={getResource(name)}
      />);
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(DataSourceHoc);
};

export default DataSource;

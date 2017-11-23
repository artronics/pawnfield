import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import ResourceToolbar from 'components/ResourceToolbar';
import Table from 'components/Table';

export const ResourceTable = ({title, columns}) => {
  const data = [
    {id: 12, firstName: 'john', lastName: 'doe', mobile: '123'},
    {id: 43, firstName: 'Al', lastName: 'Tenner', mobile: '987'},
  ];

  return class ResourceTableHoc extends React.Component {
    render() {
      return (
          <Card>
            <ResourceToolbar title={title}/>
            <Table data={data} columns={columns}/>
          </Card>
      );
    }
  };
};

export function mapStateToProps(state) {
  return {};
}

export function mapDispatchToProps(dispatch) {
  return {};
}

export default (props) =>
    connect(mapStateToProps, mapDispatchToProps)(ResourceTable(props));


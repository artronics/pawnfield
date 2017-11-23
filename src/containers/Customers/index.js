import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { withTabs } from 'containers/Tab';
import DataSource from 'containers/DataSource';
import ResourceToolbar from 'components/ResourceToolbar';
import Table from 'components/Table';
import Card from 'components/Card';
import { columns } from './customer';

class Home extends React.Component {
  componentWillMount() {
    this.props.getResource({pagination: {}});
  }

  data = [
    {id: 12, firstName: 'john', lastName: 'doe', mobile: '123'},
    {id: 43, firstName: 'Al', lastName: 'Tenner', mobile: '987'},
  ];

  render() {
    return (
        <div>
          <Card>
            <ResourceToolbar title='Recently Added Customers'/>
            <Table data={this.data} columns={columns} selectedId={1}
                   onRowSelect={(id) => console.log(id)}/>
          </Card>
        </div>
    );
  }
}
const New = () => {
  return (
    <div>
      new customer
    </div>
  );
};

export class Customers extends React.Component {
  render () {
    console.log(this.props);
    return (
      <Switch>
        <Route exact path='/app/customers'
               render={() => <Home {...this.props}/>} state={{kir: 'kos'}}/>
        <Route path='/app/customers/new' component={New}/>
      </Switch>
    );
  }
}

const tabs = {
  '/': {to: '/app/customers', label: 'Customers'},
  new: {to: '/app/customers/new', label: 'New Customer'}
};

const wrappedCustomer = withRouter(DataSource('customers')(Customers));
export default withTabs('customers', tabs)(wrappedCustomer);

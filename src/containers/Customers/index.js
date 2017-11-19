import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import ipsum from 'lorem-ipsum';
import { withTabs } from 'containers/Tab';
import DataSource from 'containers/DataSource';

const Home = (props) => {
  return (
    <div>
      home
      <Typography>
        {ipsum({count: 50, units: 'paragraphs'})}
      </Typography>
    </div>
  );
};
const New = () => {
  return (
    <div>
      new customer
      <Typography>
        {ipsum({count: 50, units: 'paragraphs'})}
      </Typography>
    </div>
  );
};

export class Customers extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/app/customers' component={Home} state={{kir: 'kos'}}/>
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

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import ipsum from 'lorem-ipsum';
import { withTabs } from 'containers/Tab';
import DataSource from 'containers/DataSource';

class Home extends React.Component {
  componentWillMount() {
    console.log(this.props);
    this.props.getResource({pagination: {}});
  }

  render() {
    return (
        <div>
          home
          <Typography>
            {ipsum({count: 50, units: 'paragraphs'})}
          </Typography>
        </div>
    );
  }
}
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

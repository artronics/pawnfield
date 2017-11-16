import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import ipsum from 'lorem-ipsum';
import { withTabs } from 'containers/Tab';

const Home = () => {
  return(
    <div>
      home
      <Typography>
        {ipsum({count: 50, units: 'paragraphs'})}
      </Typography>
    </div>
  );
}
const New = () => {
  return(
    <div>
      new customer
      <Typography>
        {ipsum({count: 50, units: 'paragraphs'})}
      </Typography>
    </div>
  );
}

export class Customers extends React.PureComponent {
  add = () => this.props.addTabItem('customers', {kir: {label: 'kir', to: '/app/customers/kir'}});
  
  render() {
    return (
      <Switch>
        <Route exact path='/app/customers' component={Home} />
        <Route path='/app/customers/new' component={New} />
      </Switch>
    );
  }
}

const tabs = {
  home: {to: '/app/customers', label: 'Customers'},
  new: {to: '/app/customers/new', label: 'New Customer'}
};

export default withTabs('customers', tabs)(Customers);

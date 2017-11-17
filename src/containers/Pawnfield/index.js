import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Layout, {Nav, NavItem, Main, Receipt} from 'containers/Layout';
import Customers from 'containers/Customers';
import Items from 'containers/Items';

const renderNavItem = (to, text, icon) => (
  <NavLink to={to}>
    <i className={`fa fa-fw fa-${icon}`}></i><Typography type='button'>{text}</Typography>
  </NavLink>
);

const navItems = [
  renderNavItem('/app/customers', 'Customers', 'user'),
  renderNavItem('/app/items', 'Items', 'laptop'),
]

export const Pawnfield = () => {
  return (
    <div>
      <Layout>
        <Main>
          <Switch>
            <Route path='/app/customers' component={Customers}/>
            <Route path='/app/items' component={Items} />
          </Switch>
        </Main>
        <Receipt>receipt</Receipt>
        <Nav>
          {navItems.map((item, i) => <NavItem key={i}>{item}</NavItem>)}
        </Nav>
      </Layout>
    </div>
  );
}



export default connect()(Pawnfield);

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Layout, {Nav, NavItem, Main, Receipt} from 'containers/Layout';
import Tab from 'containers/Tab';

const renderNavItem = (to, text, icon) => (
  <NavLink to={to}>
    <i className={`fa fa-fw fa-${icon}`}></i><Typography type='button'>{text}</Typography>
  </NavLink>
);

const navItems = [
  renderNavItem('/customrs', 'Customers', 'user'),
  renderNavItem('/items', 'Items', 'laptop'),
]

export const Pawnfield = () => {
  return (
    <div>
      <Layout>
        <Main>
          <Tab></Tab>
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

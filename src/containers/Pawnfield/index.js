import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Layout, {Nav, NavItem, Main, TabSection, Receipt} from 'containers/Layout';

const renderNavItem = (to, text, icon) => (
  <NavLink to={to}>
    <i className={`fa fa-fw fa-${icon}`}></i><Typography type='button'>{text}</Typography>
  </NavLink>
);

const navItems = [
  renderNavItem('/customrs', 'Customers', 'user'),
  renderNavItem('/items', 'Items', 'laptop'),
]

const Pawnfield = () => {
  return (
    <div>
      <Layout>
        <Nav>
          {navItems.map((item, i) => <NavItem key={i}>{item}</NavItem>)}
        </Nav>
        <Main>
          <TabSection>foo  bar</TabSection>
          main
        </Main>
        <Receipt>receipt</Receipt>
      </Layout>
    </div>
  );
}



export default Pawnfield;

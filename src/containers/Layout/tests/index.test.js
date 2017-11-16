import React from 'react';
import { shallow } from 'enzyme';
import { Layout, Main, Nav, NavItem, Receipt } from '../index';

describe('<Layout/>', () => {
  const app = shallow(
    <Layout>
      <Nav>
        <NavItem>foo</NavItem>
        <NavItem>bar</NavItem>
      </Nav>
      <Main>main</Main>
      <Receipt>receipt</Receipt>
    </Layout>
  );
  const nav = app.find(Nav);
  const main = app.find(Main);
  const receipt = app.find(Receipt);
  it('should render elements', () => {
    expect(nav.length).toEqual(1);
    expect(main.length).toEqual(1);
    expect(receipt.length).toEqual(1);
  });
  it('should render Layout', () => {
    expect(shallow(<Layout/>)).toBeDefined();
  });
});

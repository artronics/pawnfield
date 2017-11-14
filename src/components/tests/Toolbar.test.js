import React from 'react';
import { shallow } from 'enzyme';
import MdToolbar from 'material-ui/Toolbar';
import Toolbar from '../Toolbar';
describe('<Toolbar/>', () => {
  const toolbar = shallow(
    <Toolbar>
      <p>foo</p>
      <p>bar</p>
    </Toolbar>
  );
  it('should render material Toolbar', () => {
    expect(toolbar.find(MdToolbar).length).toEqual(1);
  });
  it('should render children', () => {
    expect(toolbar.find(MdToolbar).children().length).toEqual(2);
  });
});

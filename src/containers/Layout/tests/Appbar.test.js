import React from 'react';
import { shallow, mount } from 'enzyme';
import MdAppbar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'components/Toolbar';
import { Appbar } from '../Appbar';

describe('<Appbar/>', () => {
  const appbar = shallow(<Appbar/>);
  it('should render Appbar', () => {
    expect(appbar).toBeDefined();
  });
  it('should render material AppBar', () => {
    const mdAppbar = appbar.find(MdAppbar);
    expect(mdAppbar.length).toEqual(1);
    expect(mdAppbar.props().position).toEqual('static');
  });
  it('should render Toolbar', () => {
    expect(appbar.find(Toolbar).length).toEqual(1);
  });
  it('should render title', () => {
    const title = mount(<Appbar />).find(Typography);
    expect(title.length).toEqual(1);
    expect(title.props().color).toEqual('inherit');
    expect(title.props().type).toEqual('title');
    expect(title.children().text()).toEqual('Pawnfield');
  });
});

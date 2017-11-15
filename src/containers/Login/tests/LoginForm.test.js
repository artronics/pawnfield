import React from 'react';
import { shallow } from 'enzyme';
import { FormTextField } from 'components/TextField';
import Typography from 'material-ui/Typography';
import { LoginButton, LoginForm } from '../LoginForm';

describe('<LoginForm/>', () => {
  const clickSpy = jest.fn();
  const wrapper = shallow(<LoginForm handleSubmit={clickSpy} loginError={false}/>);
  const form = wrapper.find('form');
  it('should render components', () => {
    expect(wrapper.find(LoginButton).length).toEqual(1);
    expect(wrapper.find(FormTextField).length).toEqual(2);
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
  });
  it('should call handleSubmit', () => {
    expect(clickSpy).not.toHaveBeenCalled();
    form.simulate('submit');
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
  it('should render error msg if loginError is true', () => {
    let msg = wrapper.find(Typography);
    expect(msg.length).toEqual(0);
    wrapper.setProps({loginError: true});
    msg = wrapper.find(Typography);
    expect(msg.length).toEqual(1);
    expect(msg.props().type).toEqual('caption');
    expect(msg.props().color).toEqual('error');
  });
});

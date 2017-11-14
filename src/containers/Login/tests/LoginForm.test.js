import React from 'react';
import { shallow } from 'enzyme';
import { FormTextField } from 'components/TextField';
import { LoginButton, LoginForm } from '../LoginForm';

describe('<LoginForm/>', () => {
  const clickSpy = jest.fn();
  const wrapper = shallow(<LoginForm handleSubmit={clickSpy}/>);
  const form = wrapper.find('form');
  it('should render components', () => {
    const wrapper = shallow(<LoginForm handleSubmit={clickSpy}/>);
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
});

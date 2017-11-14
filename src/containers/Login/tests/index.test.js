import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../index';
import LoginForm from '../LoginForm';
import { login } from '../state';

describe('<Login />', () => {
  const onLoginSpy = jest.fn();
  it('should render LoginForm', () => {
    const form = shallow(<Login onLogin={onLoginSpy} />).find(LoginForm);
    expect(form.length).toEqual(1);
  });
  it('should pass onLogin to LoginForm', () => {
    const form = shallow(<Login onLogin={onLoginSpy} />).find(LoginForm);
    expect(form.props().onSubmit).toEqual(onLoginSpy);
  });
  it('should pass along props to LoginForm', () => {
    const form = shallow(<Login onLogin={onLoginSpy} other='foo' />).find(LoginForm);
    expect(form.props().other).toEqual('foo');
  });

  describe('mapDispatchToProps', () => {
    it('should define onLogin', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onLogin).toBeDefined();
    });
    it('should call onLogin with credentials', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const cred = {email: 'foo@bar.baz', password: 'secret'};
      result.onLogin(cred);
      expect(dispatch).toHaveBeenCalledWith(login(cred));
    });
  });
});

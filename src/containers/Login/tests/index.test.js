import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Login, mapStateToProps, mapDispatchToProps } from '../index';
import LoginForm from '../LoginForm';
import { login } from '../state';

describe('<Login />', () => {
  const onLoginSpy = jest.fn();
  const form = shallow(<Login onLogin={onLoginSpy} loginError={false} other='foo' />).find(LoginForm);

  it('should render LoginForm', () => {
    expect(form.length).toEqual(1);
  });
  it('should pass onLogin to LoginForm', () => {
    expect(form.props().onSubmit).toEqual(onLoginSpy);
  });
  it('should pass along props to LoginForm', () => {
    expect(form.props().other).toEqual('foo');
  });
  describe('mapStateToProps', () => {
    it('should return loginError', () => {
      const props = mapStateToProps(fromJS({login: {loginError: false}}));
      expect(props.loginError).toEqual(false);
    });
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

import { fromJS } from 'immutable';
import { accountSuccessful } from 'containers/Pawnfield/state';
import {
  LOGIN,
  LOGIN_ERROR,
  login,
  loginError,
  reducer,
  selectLogin,
  selectPassword,
  selectLoginError,
} from '../state';

describe('Login state', () => {
  const loginModel = {email: '', password: ''};
  const state = fromJS({
    login: {
      ...loginModel,
      loginError: false
    }
  });
  describe('reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(state.get('login'));
    });
    it('should clear password on ACCOUNT_SUCCESSFUL', () => {
      const login = state.setIn(['login', 'password'], 'foosecret');
      const act = accountSuccessful({});
      const pass = reducer(login, act).getIn(['login', 'password']);
      expect(pass).toEqual('');
    });
    it('should set loginError on LOGIN_ERROR', () => {
      const loginState = reducer(undefined, loginError()).toJS();
      expect(loginState.loginError).toEqual(true);
    });
  });
  describe('actions', () => {
    it('should return correct type on LOGIN', () => {
      const cred = {email: 'foo@bar.baz', password: 'secret'};
      const act = login(cred);
      expect(act).toEqual({type: LOGIN, credentials: cred });
    });
    it('should return correct type on LOGIN_ERROR', () => {
      expect(loginError()).toEqual({type: LOGIN_ERROR});
    });
  });
  describe('selectors', () => {
    it('should return login state', () => {
      expect(selectLogin(state)).toEqual(state.get('login').toJS());
    });
    it('should selectPassword', () => {
      const login = state.setIn(['login', 'password'], 'foosecret');
      expect(selectPassword(login)).toEqual('foosecret');
    });
    it('should selectLoginError', () => {
      expect(selectLoginError(state)).toEqual(false);
    });
  });
});

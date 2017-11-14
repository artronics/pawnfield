import { fromJS } from 'immutable';
import {
  LOGIN,
  login,
  reducer,
  selectLogin,
} from '../state';

describe('Login state', () => {
  const loginModel = {email: '', password: ''};
  const state = fromJS({
    login: {
      ...loginModel,
    }
  });
  describe('reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(state.get('login'));
    });
  });
  describe('actions', () => {
    it('should return correct type on LOGIN', () => {
      const cred = {email: 'foo@bar.baz', password: 'secret'};
      const act = login(cred);
      expect(act).toEqual({type: LOGIN, credentials: cred });
    });
  });
  describe('selectors', () => {
    it('should return login state', () => {
      expect(selectLogin(state)).toEqual(loginModel);
    });
  });
});

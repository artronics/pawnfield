import { fromJS } from 'immutable';
import {
  ACCOUNT_SUCCESSFUL,
  accountSuccessful,
  reducer,
  selectApp,
  makeSelectToken,
  selectLoggedIn,
} from '../state';
// import { selectGlobal, selectToken, } from '../selectors';

describe('state', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      account: {
        token: '',
      },
    });
  });
  describe('actions', () => {
    it('should return corrent type on ACCOUNT_SUCCESSFUL', () => {
      const account = {
        account: {token: 'foo'}
      };
      const act = accountSuccessful(account);
      expect(act).toEqual({type: ACCOUNT_SUCCESSFUL, account});
    });
  });
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(state);
    });
    it('should change state to add account on ACCOUNT_SUCCESSFUL', () => {
      const acc = {token: 'footoken'};
      expect(reducer(undefined, accountSuccessful(acc))).toEqual(
        state.set('account', acc)
      );
    });
  });
  describe('selectors', () => {
    const appState = fromJS({
      app: {
        account: {token: 'some token'}
    }
  });
    it('should select app from global state', () => {
      expect(selectApp(appState)).toEqual(appState.get('app'));
    });
    it('should select token', () => {
      expect(makeSelectToken(appState)).toEqual('some token');
    });
    it('should select loggedIn', () => {
      const state = fromJS({
        app: {account: {token: ''}}
      })
      expect(selectLoggedIn(state)).toEqual(false);
    });
  });
});

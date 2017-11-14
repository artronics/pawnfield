import { fromJS } from 'immutable';
import {
  reducer,
  selectApp,
  makeSelectToken
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
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(state);
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
  });
  /*
  describe('selectors', () => {
    it('should select global', () => {
      const globalState = fromJS({});
      const mockedState = fromJS({
        global: globalState,
      });
      expect(selectGlobal(mockedState)).toEqual(globalState);
    });
    it('should selectToken', () => {
      const mockedState = fromJS({
        global: {
          account: {token: 'foo'},
        },
      });
      expect(selectToken()(mockedState)).toEqual('foo');
    });
  });
  */
});

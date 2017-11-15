import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { ACCOUNT_SUCCESSFUL } from 'containers/Pawnfield/state';

// constants
export const LOGIN = 'pawnfield/Login/LOGIN';
export const LOGIN_ERROR = 'pawnfield/Login/LOGIN_ERROR';

// actions
export function login(credentials) {
  return {
    type: LOGIN,
    credentials,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

const initialState = fromJS({
  email: '',
  password: '',
  loginError: false,
})

export const selectPassword = state => state.getIn(['login', 'password']);

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESSFUL:
      return state
        .setIn(['login', 'password'], '');
    case LOGIN_ERROR:
      return state
        .set('loginError', true);
    default:
      return state;
  }
}

// selector
export const selectLogin = state => state.get('login').toJS();
export const selectLoginError = createSelector(
  selectLogin,
  (login) => login.loginError,
);

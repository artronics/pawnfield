import { fromJS } from 'immutable';

// constants
export const LOGIN = 'pawnfield/Login/LOGIN';

// actions
export function login(credentials) {
  return {
    type: LOGIN,
    credentials,
  };
}

const initialState = fromJS({
  email: '',
  password: '',
})

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// selector
export const selectLogin = state => state.get('login').toJS();

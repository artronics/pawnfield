import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const ACCOUNT_SUCCESSFUL = 'pawnfield/Pawnfield/ACCOUNT_SUCCESSFUL';

// actions
export function accountSuccessful(account) {
  return {
    type: ACCOUNT_SUCCESSFUL,
    account,
  };
}

export const initialState = fromJS({
  account: {
    token: '',
  },
});

const selectApp = state => state.get('app');
export const makeSelectToken = state => state.getIn(['app', 'account', 'token']);
export const selectLoggedIn = createSelector(
  makeSelectToken,
  (token) => (!token || token === '') ? false : true,
);

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESSFUL:
      return state
        .set('account', action.account);
    default:
      return state;
  }
}

export {
  selectApp,
};

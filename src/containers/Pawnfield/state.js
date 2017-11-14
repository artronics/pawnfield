import { fromJS } from 'immutable';

export const initialState = fromJS({
  account: {
    token: '',
  },
});

const selectApp = state => state.get('app');
export const makeSelectToken = state => state.getIn(['app', 'account', 'token']);

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export {
  selectApp,
};

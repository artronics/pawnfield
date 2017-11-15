import { call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import { push } from 'react-router-redux';
import { accountSuccessful } from 'containers/pawnfield/state';
import { post } from 'utils/api';
import { loginSaga, setAccount } from '../saga';
import { LOGIN, loginError } from '../state'


describe('saga', () => {
  const cred = {email: 'foo@bar.baz', password: 'secret'};
  const action = {
    type: LOGIN,
    credentials: fromJS(cred),
  };
  it('should post login', () => {
    const account = {token: 'footoken'};
    return expectSaga(loginSaga)
      .provide([
        [matchers.call.fn(post), {token: 'footoken'}],
        [matchers.call.fn(setAccount), undefined],
      ])
      .put(accountSuccessful(account))
      .put(push('/app'))
      .dispatch(action)
      .run();
  });
  it('should put LOGIN_ERROR', () => {
    return expectSaga(loginSaga)
      .provide([
        [matchers.call.fn(post), throwError({status: 401})],
      ])
      .put(loginError())
      .dispatch(action)
      .run();
  });
});

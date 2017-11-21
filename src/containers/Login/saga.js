import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { accountSuccessful } from 'containers/Pawnfield/state';
import { post } from 'utils/api';
import { LOGIN, loginError } from './state';

export function* login(values) {
  const credentials = values.credentials.toJS();
  // at backend we expect username instead of email
  const cred = {username: credentials.email, password: credentials.password};
  try {
    const account = yield call(post, '/auth/login', cred);
    yield call(setAccount, account);
    yield put(accountSuccessful(account));
    yield put(push('/app'));
  } catch (err) {
    if (err.status === 401) {
      yield put(loginError());
    }
    console.log('r', err.status);
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

const defaultSaga = [
  loginSaga(),
];

function getAccount() {
  return JSON.parse(localStorage.getItem('account'));
}

function setAccount(account) {
  localStorage.setItem('account', JSON.stringify(account));
}

function removeAccount() {
  localStorage.removeItem('account');
}

export {
  getAccount,
  setAccount,
  removeAccount,
};

export default defaultSaga;

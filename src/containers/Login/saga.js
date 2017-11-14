import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from './state';

function* login(values) {
  const credentials = values.credentials.toJS();
  console.log(credentials);
}

const defaultSaga = [
  takeLatest(LOGIN, login),
];

export default defaultSaga;

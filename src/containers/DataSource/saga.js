import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'utils/api';
import { GET_RESOURCE, getResourceSuccess } from './state';

export function* getResource({name}) {
  console.log(name);
  const url = `/${name}`;
  const resource = yield call(get, url);
  yield put(getResourceSuccess(resource));
}

export function* getResourceSaga() {
  yield takeLatest(GET_RESOURCE, getResource);
}

const defaultSaga = [
  getResourceSaga(),
];

export default defaultSaga;

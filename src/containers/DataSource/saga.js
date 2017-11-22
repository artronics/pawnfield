import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'utils/api';
import { GET_RESOURCE, getResourceSuccess } from './state';

export function getFullUrl(name, options) {
  let url = `/${name}`;
  if (!options) {
    return url;
  }
  const {pagination} = options;
  if (pagination) {
    const {page = 0, size = 10} = pagination;
    url = `${url}?page=${page}&size=${size}`;
  }

  return url;
}

export function* getResource({name, options}) {
  const url = yield call(getFullUrl, name, options);
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

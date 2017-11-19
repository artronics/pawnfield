import { all } from 'redux-saga/effects';
import loginSaga from 'containers/Login/saga';
import dataSourceSaga from 'containers/DataSource/saga';

export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...dataSourceSaga,
  ]);
}

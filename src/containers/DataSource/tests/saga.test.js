import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { get } from 'utils/api';
import { getResourceSaga } from '../saga';
import {
  getResource as getResourceAction,
  getResourceSuccess,
} from '../state';

describe('DataSource saga', () => {
  const action = getResourceAction('foo');

  it('should ', () => {
    const resource = {customers: [{name: 'foo'}]};
    return expectSaga(getResourceSaga)
        .provide([
          [matchers.call.fn(get), resource],
        ])
        .put(getResourceSuccess(resource))
        .dispatch(action)
        .run();
  });
});
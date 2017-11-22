import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { get } from 'utils/api';
import { getFullUrl, getResourceSaga } from '../saga';
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
          [matchers.call.fn(getFullUrl), resource],
        ])
        .put(getResourceSuccess(resource))
        .dispatch(action)
        .run();
  });
  describe('getFullUrl', () => {
    const name = 'foo';
    it('should return /name if options are not defined', () => {
      const url = getFullUrl(name, undefined);
      expect(url).toEqual('/foo');
    });
    it('should set page and size if pagination is defined', () => {
      const url = getFullUrl(name, {pagination: {page: 2, size: 0}});
      expect(url).toEqual('/foo?page=2&size=0');
    });
    it('should set default size to 10', () => {
      const url = getFullUrl(name, {pagination: {page: 2}});
      expect(url).toEqual('/foo?page=2&size=10');
    });
    it('should set default page to 0', () => {
      const url = getFullUrl(name, {pagination: {}});
      expect(url).toEqual('/foo?page=0&size=10');
    });
  });
});
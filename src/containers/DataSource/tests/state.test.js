import { fromJS } from 'immutable';
import {
  CREATE_RESOURCE,
  createResource,
  GET_RESOURCE,
  GET_RESOURCE_SUCCESS,
  getResource,
  getResourceSuccess,
  reducer,
} from '../state';

describe('DataSource state', () => {
  const initialState = fromJS({});
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });
  describe('actions', () => {
    it('should return correct type on CREATE_RESOURCE', () => {
      expect(createResource('foo'))
          .toEqual({type: CREATE_RESOURCE, name: 'foo'});
    });
    it('should return correct type on GET_RESOURCE', () => {
      expect(getResource('foo', {foo: 'bar'}))
          .toEqual(
              {
                type: GET_RESOURCE,
                name: 'foo',
                options: {foo: 'bar'},
              },
          );
    });
    it('should return correct type on GET_RESOURCE_SUCCESS', () => {
      expect(getResourceSuccess('resources'))
          .toEqual({type: GET_RESOURCE_SUCCESS, resource: 'resources'});
    });
  });
});

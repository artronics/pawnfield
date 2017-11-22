import { fromJS } from 'immutable';
import {
  ADD_RESOURCE,
  addResource,
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
  const fooState = {foo: {something: 'something'}};
  const state = fromJS(fooState);
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should add resource name object on ADD_RESOURCE', () => {
      const act = addResource('bar');
      const barState = {};
      const exp = state.set('bar', fromJS(barState));
      expect(reducer(state, act)).toEqual(exp);
    });
    it('should not change resource on ADD_RESOURCE if it already exist', () => {
      const act = addResource('foo');
      const exp = fromJS(fooState);
      expect(reducer(state, act)).toEqual(exp);
    });
  });
  describe('actions', () => {
    it('should return correct type on ADD_RESOURCE', () => {
      expect(addResource('foo')).toEqual({type: ADD_RESOURCE, name: 'foo'});
    });
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

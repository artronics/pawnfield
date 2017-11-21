import React from 'react';
import configureStore from 'redux-mock-store';
import { DataSource, mapDispatchToProps } from '../index';
import { getResource as getResourceAction } from '../state';

const mockStore = configureStore([])({});

describe('DataSource', () => {
  describe('render', () => {
    const WrappedComponent = () => (<div></div>);
    const Hoc = DataSource('foo')(WrappedComponent);

  });
  describe('mapDispatchToProps', () => {
    it('should have getResource props', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.getResource).toBeDefined();
    });
    it('should called getResource action after getting resource name', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.getResource('resourceName')({options: 'foo'});
      expect(dispatch)
          .toHaveBeenCalledWith(
              getResourceAction('resourceName', {options: 'foo'}));
    });
  });
});
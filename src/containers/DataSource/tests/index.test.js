import React from 'react';
import { shallow } from 'enzyme';
import { DataSource, mapDispatchToProps } from '../index';
import { getResource as getResourceAction } from '../state';

describe('DataSource', () => {
  describe('render', () => {
    const WrappedComponent = () => (<div></div>);
    const Hoc = DataSource('foo')(WrappedComponent);
    it('should render WrappedComponent', () => {
      const Ds = shallow(<Hoc getResource={() => {
      }}/>);
      expect(Ds.find(WrappedComponent).length).toEqual(1);
    });
    it('should call getResource with provided name', () => {
      const getResource = jest.fn();
      shallow(<Hoc getResource={getResource}/>);
      expect(getResource).toHaveBeenCalledWith('foo');
    });
    it('should pass getResource as props', () => {
      const Ds = shallow(<Hoc getResource={() => () => {
      }}/>);
      expect(Ds.find(WrappedComponent).props().getResource).toBeDefined();
    });
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
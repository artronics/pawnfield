import React from 'react';
import { shallow } from 'enzyme';
import { DataSource, mapDispatchToProps } from '../index';
import { addResource, getResource as getResourceAction } from '../state';

describe('DataSource', () => {
  describe('render', () => {
    const WrappedComponent = () => (<div></div>);
    const Hoc = DataSource('foo')(WrappedComponent);
    const HocCom = <Hoc getResource={() => () => {
    }} addResource={() => {
    }}/>;
    it('should render WrappedComponent', () => {
      const Ds = shallow(HocCom);
      expect(Ds.find(WrappedComponent).length).toEqual(1);
    });
    it('should call getResource with provided name', () => {
      const getResource = jest.fn();
      shallow(<Hoc getResource={getResource} addResource={() => {
      }}/>);
      expect(getResource).toHaveBeenCalledWith('foo');
    });
    it('should pass getResource as props', () => {
      const Ds = shallow(HocCom);
      expect(Ds.find(WrappedComponent).props().getResource).toBeDefined();
    });
    it('should call addResource on componentWillMount', () => {
      const addResource = jest.fn();
      const instance = shallow(
          <Hoc
              getResource={() => () => {
              }}
              addResource={addResource}
          />,
      ).instance();
      instance.componentWillMount();
      expect(addResource).toHaveBeenCalled();
    });
  });
  describe('mapDispatchToProps', () => {
    it('should have addResource props', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.addResource).toBeDefined();
    });
    it('should call addResource action with resourceName', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.addResource('foo');
      expect(dispatch).toHaveBeenCalledWith(addResource('foo'));
    });
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
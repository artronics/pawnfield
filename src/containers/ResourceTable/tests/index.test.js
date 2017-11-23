import React from 'react';
import { shallow } from 'enzyme';
import Card from 'components/Card';
import ResourceToolbar from 'components/ResourceToolbar';
import Table from 'components/Table';
import { ResourceTable } from '../index';

describe('<ResourceTable/>', () => {
  const columns = [{id: 'id', label: 'ID',}, {id: 'name', label: 'Name',}];
  describe('render', () => {
    const props = {title: 'Foo', columns};
    const Hoc = ResourceTable(props);
    const ResTbl = shallow(<Hoc/>);
    it('should render Card', () => {
      expect(ResTbl.find(Card).length).toEqual(1);
    });
    it('should render ResourceToolbar', () => {
      expect(ResTbl.find(ResourceToolbar).length).toEqual(1);
    });
    it('should pass title to ResourceToolbar', () => {
      expect(ResTbl.find(ResourceToolbar).props().title).toEqual('Foo');
    });
    it('should render Table', () => {
      expect(ResTbl.find(Table).length).toEqual(1);
    });
    it('should pass columns to Table', () => {
      expect(ResTbl.find(Table).props().columns).toEqual(columns);
    });
  });
});
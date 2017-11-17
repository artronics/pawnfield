import { fromJS } from 'immutable';
import {
  ADD_TAB_ITEM, ADD_TABS_GROUP, CHANGE_ACTIVE_TAB,
  addTabItem, addTabsGroup, changeActiveTab,
  makeSelectTabs, selectActiveTab, selectTabs,
  reducer,
} from '../state';

describe('state', () => {
  const tabs = {
    foo: {
      active: '/',
      '/': {to: '/foo', label: 'FOO'},
      'bar': {to: '/foo/bar', label: 'BAR'},
    },
  };
  const global = fromJS({
    tabs,
  });
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(fromJS({}));
    });
  });
  describe('selectors', () => {
    it('should selectTabs', () => {
      expect(selectTabs(global)).toEqual(tabs);
    });
    it('should selectActiveTab', () => {
      expect(selectActiveTab('foo')(global)).toEqual('/');
    });
    it('should return 0 if selectActiveTab can not find key', () => {
      expect(selectActiveTab('java')(global)).toEqual(0);
    });
    it('should makeSelectTabs', () => {
      expect(makeSelectTabs('foo')(global)).toEqual([
        {to: '/foo', key: '/', label: 'FOO',},
        {to: '/foo/bar', key: 'bar', label: 'BAR',},
      ]);
    });
  });
  describe('actions', () => {
    it('should return correct type on addTabsGroup', () => {
      expect(addTabsGroup('foo', {to: 'some/path'}))
          .toEqual(
              {
                type: ADD_TABS_GROUP,
                tab: {tabGroupName: 'foo', tabItems: {to: 'some/path'}},
              });
    });
    it('should return correct type on addTabItem', () => {
      expect(addTabItem('foo', {to: 'some/path'}))
          .toEqual(
              {
                type: ADD_TAB_ITEM,
                tab: {tabGroupName: 'foo', tabItem: {to: 'some/path'}},
              });
    });
    it('should return correct type on changeActiveTab', () => {
      expect(changeActiveTab('foo', 'bar'))
          .toEqual({
            type: CHANGE_ACTIVE_TAB,
            tab: {tabGroupName: 'foo', name: 'bar'},
          });
    });
  });
});

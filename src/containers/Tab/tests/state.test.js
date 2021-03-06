import { fromJS } from 'immutable';
import {
  ADD_TAB_ITEM,
  ADD_TABS_GROUP,
  addTabItem,
  addTabsGroup,
  CHANGE_ACTIVE_TAB,
  changeActiveTab,
  makeSelectTabs,
  reducer,
  selectActiveTab,
  selectTabs,
} from '../state';

describe('state', () => {
  const tabs = {
    foo: {
      active: '/',
      '/': {to: '/foo', label: 'FOO'},
      'bar': {to: '/foo/bar', label: 'BAR'},
    },
  };
  const tabsIm = fromJS(tabs);
  const global = fromJS({
    tabs,
  });
  describe('reducer', () => {
    it('should return initialState', () => {
      expect(reducer(undefined, {})).toEqual(fromJS({}));
    });
    it('should return ADD_TABS_GROUP ', () => {
      const group = {'/': {to: '/baz', label: 'BAZ'}};
      const act = addTabsGroup('baz', group);
      const exp = tabsIm.set('baz', fromJS(group))
          .setIn(['baz', 'active'], '/');
      expect(reducer(tabsIm, act)).toEqual(exp);
    });
    it('should not change the state if key is already there', () => {
      const act = addTabsGroup('foo', {});
      expect(reducer(tabsIm, act)).toEqual(tabsIm);
    });
    it('should merge new tabItem on addTabItem', () => {
      const item = {baz: {to: '/foo/baz', label: 'BAZ'}};
      const act = addTabItem('foo', item);
      const exp = tabsIm.mergeIn(['foo'], fromJS(item));
      expect(reducer(tabsIm, act)).toEqual(exp);
    });
    it('should not change the state if key is already there', () => {
      const act = addTabItem('foo', {bar: {to: 'some-new-path'}});
      expect(reducer(tabsIm, act)).toEqual(tabsIm);
    });
    it('should changeActiveTab', () => {
      const name = 'bar';
      const act = changeActiveTab('foo', name);
      const exp = tabsIm.setIn(['foo', 'active'], name);
      expect(reducer(tabsIm, act)).toEqual(exp);
    });
    it('should not change state if activeTab name does not exist', () => {
      const act = changeActiveTab('foo', 'non-existence');
      expect(reducer(tabsIm, act)).toEqual(tabsIm);
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
                tab: {tabGroupName: 'foo', tabItems: fromJS({to: 'some/path'})},
              });
    });
    it('should return correct type on addTabItem', () => {
      expect(addTabItem('foo', {to: 'some/path'}))
          .toEqual(
              {
                type: ADD_TAB_ITEM,
                tab: {tabGroupName: 'foo', tabItem: fromJS({to: 'some/path'})},
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

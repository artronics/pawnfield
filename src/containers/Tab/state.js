import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// constants
export const ADD_TABS_GROUP = 'pawnfield/Tab/ADD_TABS_GROUP';
export const ADD_TAB_ITEM = 'pawnfield/Tab/ADD_TAB_ITEM';

// actions
export function addTabsGroup(tabGroupName, tabItems) {
  return {
    type: ADD_TABS_GROUP,
    tab: {tabGroupName, tabItems},
  };
}

export function addTabItem(tabGroupName, tabItem) {
  return {
    type: ADD_TAB_ITEM,
    tab: {tabGroupName, tabItem},
  };
}
const initialState = fromJS(
  {}
);

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TABS_GROUP:
      if (state.has(action.tab.tabGroupName)) {
        return state
      }
      return state.set(action.tab.tabGroupName, action.tab.tabItems)

    case ADD_TAB_ITEM:
      const {tabGroupName, tabItem} = action.tab;
      const key = tabItem.keySeq().first();
      if (state.hasIn([tabGroupName, key])) {
        return state;
      }
      return state.mergeIn([tabGroupName],tabItem);

    default:
      return state;
  }
}

// selectors
const toArray = tabs => {
  const keys = Object.keys(tabs);
  const arr = [];
  keys.forEach((k) => arr.push({to: tabs[k].to, label: tabs[k].label, key: k}))
  return arr;
}

const selectTabs = state => state.get('tabs').toJS();
export const makeSelectTabs = tabGroupName => createSelector(
  selectTabs,
  (tab) => toArray(tab[tabGroupName] || {}),
);

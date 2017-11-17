import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// constants
export const ADD_TABS_GROUP = 'pawnfield/Tab/ADD_TABS_GROUP';
export const ADD_TAB_ITEM = 'pawnfield/Tab/ADD_TAB_ITEM';
export const CHANGE_ACTIVE_TAB = 'pawnfield/Tab/CHANGE_ACTIVE_TAB';

// actions
export function addTabsGroup(tabGroupName, tabItems) {
  return {
    type: ADD_TABS_GROUP,
    tab: {tabGroupName, tabItems: fromJS(tabItems)},
  };
}

export function addTabItem(tabGroupName, tabItem) {
  return {
    type: ADD_TAB_ITEM,
    tab: {tabGroupName, tabItem: fromJS(tabItem)},
  };
}

export function changeActiveTab(tabGroupName, name) {
  return {
    type: CHANGE_ACTIVE_TAB,
    tab: {tabGroupName, name},
  };
}

const initialState = fromJS(
    {},
);

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TABS_GROUP: {
      if (state.has(action.tab.tabGroupName)) {
        return state;
      }
      const {tabGroupName, tabItems} = action.tab;
      const firstKey = tabItems.keySeq().first();
      return state
          .set(tabGroupName, tabItems)
          .setIn([tabGroupName, 'active'], firstKey);
    }
    case ADD_TAB_ITEM: {
      const {tabGroupName, tabItem} = action.tab;
      const key = tabItem.keySeq().first();
      if (state.hasIn([tabGroupName, key])) {
        return state;
      }
      return state.mergeIn([tabGroupName], tabItem);
    }
    case CHANGE_ACTIVE_TAB: {
      const {tabGroupName, name} = action.tab;
      if (!state.hasIn([tabGroupName, name])) {
        return state;
      }
      return state.setIn([tabGroupName, 'active'], name);
    }
    default:
      return state;
  }
}

// selectors
const toArray = tabs => {
  const keys = Object.keys(tabs);
  const arr = [];
  keys.forEach(k => {
    if (k !== 'active') {
      arr.push({to: tabs[k].to, label: tabs[k].label, key: k});
    }
  });
  return arr;
};

export const selectTabs = state => state.get('tabs').toJS();
export const makeSelectTabs = tabGroupName => createSelector(
    selectTabs,
    (tab) => toArray(tab[tabGroupName] || {}),
);

export const selectActiveTab = tabGroupName => createSelector(
    selectTabs,
    (tab) => tab[tabGroupName] ? tab[tabGroupName].active : 0,
);

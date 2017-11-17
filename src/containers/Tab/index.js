import React from 'react';
import { fromJS } from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from 'components/Paper';
import AppBar from 'material-ui/AppBar';
import {default as MdTabs, Tab as MdTab } from 'material-ui/Tabs';
import {
  addTabsGroup,
  addTabItem,
  makeSelectTabs,
  selectActiveTab,
  changeActiveTab,
} from './state';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TabbarWrapper = styled(MdTabs)`
  > div > div > div > button{
    height: ${props => props.theme.navItemHeight};
  }
`;
const Scroll = styled.div`
  flex: 1 auto;
  overflow-y: scroll;
`;
const Main = styled(Paper)`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
`;

const Tabbar = withRouter((props) => {
  const {history, tabs, changeActiveTab, activeTab} = props;
  return (
        <TabbarWrapper value={activeTab}>
          {tabs.map(t => {
            return (
              <MdTab
                key={t.key}
                value={t.key}
                label={t.label}
                onClick={() => {
                  changeActiveTab(t.key);
                  history.push(t.to);
                }}
              />
            );}
          )}
        </TabbarWrapper>
      );
});

export const withTabs = (tabGroupName, tabItems) => (Component) => {
  class Tab extends React.PureComponent {
    componentWillMount() {
      this.props.addTabsGroup(tabGroupName, tabItems);
    }
    render() {
      const {addTabItem, changeActiveTab, activeTab} = this.props;
      return (
        <Wrapper>
          <AppBar position='static'>
            <Tabbar
              tabs={this.props.tabs}
              changeActiveTab={changeActiveTab(tabGroupName)}
              activeTab={activeTab}
            />
          </AppBar>
          <Main elevation={1}>
            <Scroll>
              <Component addTabItem={addTabItem}/>
            </Scroll>
          </Main>
        </Wrapper>
      );
    }
  }
  function mapStateToProps(state) {
    return {
      tabs: makeSelectTabs(tabGroupName)(state),
      activeTab: selectActiveTab(tabGroupName)(state)
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      addTabsGroup: (tabGroupName, tabItems) => dispatch(addTabsGroup(tabGroupName, fromJS(tabItems))),
      addTabItem: (tabGroupName, tabItem) => dispatch(addTabItem(tabGroupName, fromJS(tabItem))),
      changeActiveTab: tabGroupName => name => dispatch(changeActiveTab(tabGroupName, name)),
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Tab);
};

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from 'components/Paper';
import Toolbar from 'components/Toolbar';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import {default as MdTabs, Tab as MdTab } from 'material-ui/Tabs';
import { TabSection } from 'containers/Layout';

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

const Tabbar = withRouter(({history, tabs}) => {
  return (
        <TabbarWrapper value={'home'}>
          {tabs.map(t => (
            <MdTab key={t.id} value={t.id} label={t.label} onClick={() => history.push(t.to)} />
          ))}
        </TabbarWrapper>
      );
});

export const withTabs = ({tabs}) => (Component) => {
  return class Tab extends React.PureComponent {
    render() {
      return (
        <Wrapper>
          <AppBar position='static'>
            <Tabbar tabs={tabs}/>
          </AppBar>
          <Main elevation={1}>
            <Scroll>
              <Component />
            </Scroll>
          </Main>
        </Wrapper>
      );
    }
  }
};

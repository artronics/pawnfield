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
import ipsum from 'lorem-ipsum';

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

const Tabs = () => {
  return (
    <TabbarWrapper value={0}>
      <MdTab label='Customers'></MdTab>
      <MdTab label='New Customers'></MdTab>
    </TabbarWrapper>
  );
}

export const Tab = () => (
  <Wrapper>
    <AppBar position='static'>
      {Tabs()}
    </AppBar>
    <Main elevation={1}>
      <Toolbar><Typography type='title'>Customers</Typography></Toolbar>
      <Scroll>
        <Typography>
          {ipsum({count: 50, units: 'paragraphs'})}
        </Typography>
      </Scroll>
    </Main>
  </Wrapper>
);

export default connect()(Tab);

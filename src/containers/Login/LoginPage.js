import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from 'components/Paper';
import Login from './index';

const Root = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginPage = () => (
  <Root>
    <Login />
  </Root>
);

export default withRouter(connect()(LoginPage));

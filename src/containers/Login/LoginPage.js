import React from 'react';
import styled from 'styled-components';
import Paper from 'components/Paper';
import Login from './index';

const Root = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const LoginPage = () => (
  <Root>
    <Login />
  </Root>
);

export default LoginPage;

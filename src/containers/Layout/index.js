import React from 'react';
import styled from 'styled-components';
import Appbar from './Appbar';

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${props => props.theme.flatBackGround};
`;
const AppbarWrapper = styled(Appbar)`
  order: 0;
`;
const NavWrapper = styled.nav`
  order: 0;
  width: ${props => props.theme.navWidth};
  > ul {
    list-style: none;
    margin: 0 40px 0 0;
    padding: ${props=> props.theme.navItemHeight} 0 0 0;
    > li {
      display: flex;
      align-items: center;
      padding-left: 1em;
      height: ${props => props.theme.navItemHeight};
      &:hover {
        background-color: ${props => props.theme.itemHoverBackGround};
      }
      > a {
        display: flex;
        color:inherit;
        align-items: center;
        width: 100%;
        text-decoration: none;
        height: ${props => props.theme.navItemHeight};
        $:visited {
          color: inherit;
        }
        > i {
          margin-right: 1.5em;
        }
      }
    }
  }
`;
const MainWrapper = styled.div`
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ReceiptWrapper = styled.div`
  order: 2;
  width: ${props => props.theme.receiptWidth};
`;
const TabSectionWrapper = styled.nav`
  height: ${props => props.theme.navItemHeight};
  min-height:  ${props => props.theme.navItemHeight};
`;
export const Nav = ({children}) => {
  return (
    <NavWrapper>
      <ul>
        {children}
      </ul>
    </NavWrapper>
  );
}

export const NavItem = ({children}) => {
  return (
    <li>{children}</li>
  );
}

export const Main = ({children}) => {
  return(<MainWrapper>{children}</MainWrapper>);
}

export const TabSection = ({children}) => {
  return (<TabSectionWrapper>{children}</TabSectionWrapper>)
}

export const Receipt = ({children}) => {
  return (<ReceiptWrapper>{children}</ReceiptWrapper>);
}

const Layout = ({children}) => (
  <Root>
    <AppbarWrapper />
    <Container>
      {children}
    </Container>
  </Root>
);

export {
  Layout,
};
export default Layout;

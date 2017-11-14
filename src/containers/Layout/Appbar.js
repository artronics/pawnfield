import React from 'react';
import styled from 'styled-components';
import MdAppbar from 'material-ui/AppBar';
import Toolbar from 'components/Toolbar';
import Typography from 'material-ui/Typography';

const Title = () => (
  <Typography type='title' color='inherit'>
    Pawnfield
  </ Typography>
);

const TitleWrapper = styled(Title)`
  flex: 1;
`;

const Appbar = () => (
  <div>
    <MdAppbar position='static'>
      <Toolbar>
        <TitleWrapper />
      </ Toolbar>
    </ MdAppbar>
  </ div>
);

export {
  Appbar,
};

export default Appbar;

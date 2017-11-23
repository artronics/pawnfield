import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdPaper from 'material-ui/Paper';

const Paper = (props) => {
  const Root = styled(MdPaper)`

`;
  return (
      <Root {...props}>
      {props.children}
      </Root>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
};

export default Paper;

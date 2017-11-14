import React from 'react';
import PropTypes from 'prop-types';
import MdButton from 'material-ui/Button';

const Button = ({children, ...rest}) => {
  return (
    <MdButton {...rest}>
      {children}
    </MdButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

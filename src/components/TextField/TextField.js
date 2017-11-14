import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MdTextField } from 'redux-form-material-ui';


const TextField = ({capitalized, ...rest}) => {
  return (
    <MdTextField
      fullWidth
      margin={'normal'}
      className={`${capitalized ? 'art-capitalized-input' : ''}`}
      {...rest}
    />
  );
};

TextField.propTypes = {
  capitalized: PropTypes.bool,
};

export default TextField;

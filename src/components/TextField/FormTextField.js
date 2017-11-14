import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import TextField from './TextField';

const FormTextField = ({name, ...rest}) => {
  return (
    <Field
      component={TextField}
      name={name}
      {...rest}
    />
  );
};

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormTextField;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm } from 'redux-form/immutable';
import Typography from 'material-ui/Typography';
import { FormTextField } from 'components/TextField';
import Card from 'components/Card';
import { Button } from 'components/Button';

// FIXME: this style does not work. during login error width changes
const FormWrapper = styled(Card)`
  width: 365px !important;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 3em;
  height: 3em;
`;

const ErrorMsg = (
  <Typography
    type='caption'
    style={{marginTop: '2em'}}
    color='error'
  >
    Email or password is incorrect
  </Typography>
);

export const LoginForm = (props) => {
  const  {handleSubmit, loginError } = props;
  // TODO: if form is touched error should disapear
  const renderError = (er) => er && ErrorMsg;
  return (
    <FormWrapper title={'Login'} elevation={4}>
      <form onSubmit={handleSubmit} method='post'>
        <FormTextField
          label={'Email'}
          name={'email'}
          type={'email'}
          required
        />
        <FormTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          required
        />
        {renderError(loginError)}
        <LoginButton raised type={'submit'} color={'primary'}>Login</LoginButton>
      </form>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  loginError: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);

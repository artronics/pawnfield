import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm } from 'redux-form/immutable';
import { FormTextField } from 'components/TextField';
import Card from 'components/Card';
import { Button } from 'components/Button';

const FormWrapper = styled(Card)`
  width: 400px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 3em;
  height: 3em;
`;
export const LoginForm = ({handleSubmit}) => {
  return (
    <FormWrapper title={'Login'} elevation={4}>
      <form onSubmit={handleSubmit}>
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
        <LoginButton raised type={'submit'} color={'primary'}>Login</LoginButton>
      </form>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);

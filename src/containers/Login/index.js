import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, selectLoginError } from './state';

export const Login = (props) => {
  const {onLogin, loginError} = props;
  return (
    <div>
      <LoginForm onSubmit={onLogin}  {...props} />
    </div>
  );
}
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  loginError: PropTypes.bool.isRequired,
}
export function mapDispatchToProps(dispatch) {
  return {
    onLogin: (cred) => dispatch(login(cred)),
  }
}
export function mapStateToProps(state) {
  return {
    loginError: selectLoginError(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

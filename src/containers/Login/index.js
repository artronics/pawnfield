import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from './state';

export const Login = (props) => {
  const {onLogin} = props;
  return (
    <div>
      <LoginForm onSubmit={onLogin} {...props} />
    </div>
  );
}
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}
export function mapDispatchToProps(dispatch) {
  return {
    onLogin: (cred) => dispatch(login(cred)),
  }
}

export default connect(null, mapDispatchToProps)(Login);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

/* eslint-disable no-func-assign */
function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="user" component="input" type="text" placeholder="User" />
      <Field name="password" component="input" type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;

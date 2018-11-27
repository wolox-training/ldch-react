import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Message from '~components/Message';

import style from './styles.scss';

/* eslint-disable no-func-assign */
function LoginForm({ handleSubmit, loginFail }) {
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <Field
          name="username"
          className={style.formInput}
          component="input"
          type="email"
          placeholder="User"
        />
        <Field
          name="password"
          className={style.formInput}
          component="input"
          type="password"
          placeholder="Password"
        />
        <button className={style.loginButton} type="submit">
          Log in
        </button>
      </form>
      {loginFail && <Message>Username or password invalid!</Message>}
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool.isRequired
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;

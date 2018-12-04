import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

/* eslint-disable import/order */
import Message from '~components/Message';
import Input from '~components/Input';
import { required, minLength } from '~utils/validationUtils';

import style from './styles.scss';

/* eslint-disable no-func-assign */
function LoginForm({ handleSubmit, loginFail, processing }) {
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <Field
          name="username"
          className={style.formInput}
          component={Input}
          validate={[required]}
          type="email"
          placeholder="Username"
        />
        <Field
          name="password"
          className={style.formInput}
          validate={[required, minLength]}
          component={Input}
          type="password"
          placeholder="Password"
        />
        <button className={style.loginButton} type="submit">
          {processing ? 'Processing' : 'Log in'}
        </button>
      </form>
      {loginFail && <Message>Username or password invalid!</Message>}
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool.isRequired,
  processing: PropTypes.bool.isRequired
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;

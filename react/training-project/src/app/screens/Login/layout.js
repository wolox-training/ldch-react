import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

/* eslint-disable import/order */
import Message from '~components/Message';
import Input from '~components/Input';
import { required, minLength } from '~utils/validationUtils';

import { USERNAME, PASSWORD, LOG_IN, LOG_IN_FAIL, LOG_IN_FORM } from './constants';
import style from './styles.scss';

/* eslint-disable no-func-assign */
function LoginForm({ handleSubmit, loginFail }) {
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <Field
          name="username"
          className={style.formInput}
          component={Input}
          validate={[required]}
          type="email"
          placeholder={USERNAME}
        />
        <Field
          name="password"
          className={style.formInput}
          validate={[required, minLength]}
          component={Input}
          type="password"
          placeholder={PASSWORD}
        />
        <button className={style.loginButton} type="submit">
          {LOG_IN}
        </button>
      </form>
      {loginFail && <Message>{LOG_IN_FAIL}</Message>}
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool.isRequired
};

LoginForm = reduxForm({
  form: LOG_IN_FORM
})(LoginForm);

export default LoginForm;

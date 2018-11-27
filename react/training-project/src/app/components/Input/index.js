import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Input({ placeholder, input, type, meta }) {
  return (
    <Fragment>
      <input className={style.input} {...input} placeholder={placeholder} type={type} />
      {meta.error && meta.touched && <div className={style.fieldError}>{meta.error}</div>}
    </Fragment>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any)
};

export default Input;

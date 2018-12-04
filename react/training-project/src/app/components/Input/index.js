import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Input({ placeholder, input, type, meta }) {
  return (
    <Fragment>
      <input className={style.input} {...input} placeholder={placeholder} type={type} />
      {meta.error && meta.touched && <h4 className={style.fieldError}>{meta.error}</h4>}
    </Fragment>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any)
};

export default Input;

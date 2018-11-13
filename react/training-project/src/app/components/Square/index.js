import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const Square = props => (
  <button className={style.square} onClick={props.onClick}>
    {props.value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Square extends Component {
  render() {
    return <button className={style.square}>{this.props.value}</button>;
  }
}

Square.propTypes = {
  value: PropTypes.number
};

export default Square;

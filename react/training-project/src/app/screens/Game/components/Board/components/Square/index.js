import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Square extends Component {
  handleClick = () => this.props.handleClick(this.props.id);

  render() {
    return (
      <button className={style.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string
};

export default Square;

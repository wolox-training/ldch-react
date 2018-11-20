import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => this.props.handleClick(this.props.move);

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  move: PropTypes.number.isRequired
};

export default Button;

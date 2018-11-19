import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const handleClick = () => props.handleClick(props.move);
  return <button onClick={handleClick}>{props.children}</button>;
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  move: PropTypes.number.isRequired
};

export default Button;

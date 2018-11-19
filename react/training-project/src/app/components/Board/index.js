import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

class Board extends Component {
  renderSquare = squareid => (
    <Square
      value={this.props.squares[squareid]}
      key={squareid}
      id={squareid}
      handleClick={this.props.handleClick}
    />
  );

  render() {
    const NUMBER_OF_SQUARES = 9;
    return (
      <React.Fragment>
        {Array.from(Array(NUMBER_OF_SQUARES).keys()).map(i => this.renderSquare(i))}
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  handleClick: PropTypes.func,
  squares: PropTypes.arrayOf(PropTypes.string)
};

export default Board;

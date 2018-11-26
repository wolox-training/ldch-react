import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';

class Board extends Component {
  NUMBER_OF_SQUARES = 9;

  renderSquare = squareid => <Square value={this.props.squares[squareid]} key={squareid} id={squareid} />;

  render() {
    const SQUARES_TO_RENDER = Array.from(Array(this.NUMBER_OF_SQUARES).keys()).map(index =>
      this.renderSquare(index)
    );
    return <React.Fragment>{SQUARES_TO_RENDER}</React.Fragment>;
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Board;

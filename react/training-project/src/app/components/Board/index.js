import React, { Component } from 'react';

import Square from '../Square';

import style from './styles.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  };

  handleClick = squareid => {
    const squares = this.state.squares.slice();
    squares[squareid] = 'X';
    this.setState({ squares });
  };

  renderSquare = squareid => (
    <Square
      value={this.state.squares[squareid]}
      key={squareid}
      id={squareid}
      handleClick={this.handleClick}
    />
  );

  render() {
    const status = 'Next player: X';
    const NUMBER_OF_COLUMNS = 3;
    return (
      <React.Fragment>
        <h1 className={style.status}>{status}</h1>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i))}
        </div>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i + 3))}
        </div>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i + 6))}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;

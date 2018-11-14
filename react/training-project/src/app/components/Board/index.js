import React, { Component } from 'react';

import Square from '../Square';

import style from './styles.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };
  handleCick = i => {
    const statesquares = this.state.squares.slice();
    statesquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: statesquares,
      xIsNext: !this.state.xIsNext
    });
  };
  renderSquare = i => <Square value={this.state.squares[i]} key={i} onClick={() => this.handleCick(i)} />;
  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
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

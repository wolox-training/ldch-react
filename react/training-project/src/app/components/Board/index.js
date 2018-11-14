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
    if (this.calculateWinner(statesquares) || statesquares[i]) return;
    statesquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: statesquares,
      xIsNext: !this.state.xIsNext
    });
  };
  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  renderSquare = i => <Square value={this.state.squares[i]} key={i} onClick={() => this.handleCick(i)} />;
  render() {
    const winner = this.calculateWinner(this.state.squares);
    const status = winner ? `Winner: ${winner}` : `Next Player ${this.state.xIsNext ? 'X' : 'O'}`;
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

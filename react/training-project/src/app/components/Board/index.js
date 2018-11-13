import React, { Component } from 'react';

import Square from '../Square';

import style from './styles.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  };
  handleCick = i => {
    const statesquares = this.state.squares;
    statesquares[i] = 'X';
    this.setState({ squares: statesquares });
  };
  renderSquare = i => <Square value={this.state.squares[i]} onClick={() => this.handleCick(i)} />;
  render() {
    const status = 'Next player: X';
    return (
      <React.Fragment>
        <div className={style.status}>{status}</div>
        <div className={style.boardRow}>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;

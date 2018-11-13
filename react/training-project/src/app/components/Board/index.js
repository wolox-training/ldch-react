import React, { Component } from 'react';

import Square from '../Square';

import style from './styles.scss';

class Board extends Component {
  renderSquare = () => <Square />;
  render() {
    const status = 'Next player: X';
    return (
      <React.Fragment>
        <div className={style.status}>{status}</div>
        <div className={style.boardRow}>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;

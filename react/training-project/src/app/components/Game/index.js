import React, { Component } from 'react';

import Board from '../Board';

import style from './styles.scss';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
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
  handleCick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const statesquares = current.squares.slice();
    if (this.calculateWinner(statesquares) || statesquares[i]) return;
    statesquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: statesquares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };
  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };
  render() {
    const history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move.toString()}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={i => this.handleCick(i)} />
        </div>
        <div className={style.gameInfo}>
          <h3 className={style.status}>
            {winner ? `Winner: ${winner}` : `Next Player ${this.state.xIsNext ? 'X' : 'O'}`}
          </h3>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

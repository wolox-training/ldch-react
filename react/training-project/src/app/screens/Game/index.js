import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '~components/Button';

import actionCreators from '~redux/History/actions';

import Board from './components/Board';
import style from './styles.scss';

class Game extends Component {
  LINES_TO_CHECK = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  calculateWinner = squares => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.LINES_TO_CHECK.length; i++) {
      const [a, b, c] = this.LINES_TO_CHECK[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = squareid => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[squareid]) return;
    squares[squareid] = this.props.xIsNext ? 'X' : 'O';

    this.props.dispatchClick({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext
    });
  };

  render() {
    const history = this.props.history.slice();
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move.toString()}>
          <Button handleClick={this.props.jumpTo} move={move}>
            {desc}
          </Button>
        </li>
      );
    });

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} handleClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <h3 className={style.status}>
            {winner ? `Winner: ${winner}` : `Next Player ${this.props.xIsNext ? 'X' : 'O'}`}
          </h3>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  jumpTo: step => dispatch(actionCreators.setJumTo({ stepNumber: step, xIsNext: step % 2 === 0 })),
  dispatchClick: newstate => dispatch(actionCreators.setSquareClick(newstate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
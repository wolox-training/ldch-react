import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import style from './styles.scss';

function GameDumb({ current, winner, xIsNext, moves }) {
  return (
    <div className={style.game}>
      <div className={style.gameBoard}>
        <Board squares={current.squares} />
      </div>
      <div className={style.gameInfo}>
        <h3 className={style.status}>
          {winner ? `Winner: ${winner}` : `Next Player ${xIsNext ? 'X' : 'O'}`}
        </h3>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

GameDumb.propTypes = {
  current: PropTypes.objectOf(PropTypes.array),
  moves: PropTypes.arrayOf(PropTypes.element).isRequired,
  winner: PropTypes.string,
  xIsNext: PropTypes.bool.isRequired
};

export default GameDumb;

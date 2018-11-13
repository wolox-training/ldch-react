import React from 'react';

import Board from '../Board';

import style from './styles.scss';

const Game = () => (
  <div className={style.game}>
    <div className={style.gameBoard}>
      <Board />
    </div>
    <div className={style.gameInfo}>
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);

export default Game;

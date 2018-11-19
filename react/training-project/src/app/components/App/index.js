import React, { Component } from 'react';

import logo from '../../../logo.svg';
import Game from '../Game';

import style from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>TicTacToe</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;

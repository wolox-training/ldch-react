import React, { Component } from 'react';

import logo from '../../../logo.svg';
import Game from '../Game';

import style from './styles.scss';

class App extends Component {
  APP_TITLE = 'TicTacToe';

  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>{this.APP_TITLE}</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;

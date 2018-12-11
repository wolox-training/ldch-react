import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Routes from '~components/Routes';

import logo from '../logo.svg';

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
        <Routes history={this.props.history} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;

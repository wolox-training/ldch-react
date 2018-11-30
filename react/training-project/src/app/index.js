import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../logo.svg';

import AuthorizedRoute from './screens/AuthorizedRoute';
import Login from './screens/Login';
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
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/app" component={AuthorizedRoute} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

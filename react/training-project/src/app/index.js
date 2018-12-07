import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LOGIN, HOME } from '~components/Routes/constants';

import AuthorizedRoute from '~components/AuthorizedRoute';

import logo from '../logo.svg';

import PrimaryLayout from './screens/PrimaryLayout';
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
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path={LOGIN} component={Login} />
            <AuthorizedRoute path={HOME} WrappedComponent={PrimaryLayout} />
            <Redirect to={LOGIN} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;

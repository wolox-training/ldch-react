import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN, PROFILE, GAME, HOME } from '~components/Routes/constants';

import AuthorizedRoute from '~components/AuthorizedRoute';

/* eslint-disable import/order */
import Login from '~screens/Login';
import Profile from '~screens/Profile';
import Game from '~screens/Game';

function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <AuthorizedRoute exact path={LOGIN} WrappedComponent={Login} />
        <AuthorizedRoute exact path={HOME} WrappedComponent={Game} />
        <AuthorizedRoute exact path={GAME} WrappedComponent={Game} />
        <AuthorizedRoute exact path={PROFILE} WrappedComponent={Profile} />
        <Redirect to={LOGIN} />
      </Switch>
    </ConnectedRouter>
  );
}

Routes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Routes;

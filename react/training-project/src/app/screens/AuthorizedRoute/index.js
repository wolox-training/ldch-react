import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Topbar from './components/Topbar';
import Game from './screens/Game';
import Profile from './screens/Profile';

class AuthorizedRoute extends Component {
  render() {
    const { match } = this.props;
    return !this.props.token ? (
      <Redirect to="/login" />
    ) : (
      <Fragment>
        <Topbar />
        <Switch>
          <Route path={`${match.path}/game`} component={Game} />
          <Route path={`${match.path}/profile`} component={Profile} />
        </Switch>
      </Fragment>
    );
  }
}

AuthorizedRoute.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  state,
  token: state.auth.token
});

export default connect(mapStateToProps)(AuthorizedRoute);

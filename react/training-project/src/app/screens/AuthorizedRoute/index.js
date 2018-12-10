import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '~redux/Auth/actions'; // eslint-disable-line
import { GAME, PROFILE, LOGIN } from '~components/Routes/constants';

import Topbar from './components/Topbar';
import Game from './screens/Game';
import Profile from './screens/Profile';

class AuthorizedRoute extends Component {
  handleLogOut = () => this.props.logOut(this.props.token);

  render() {
    return !this.props.token ? (
      <Redirect to={LOGIN} />
    ) : (
      <Fragment>
        <Topbar logOut={this.handleLogOut} />
        <Switch>
          <Route path={GAME} component={Game} />
          <Route path={PROFILE} component={Profile} />
        </Switch>
      </Fragment>
    );
  }
}

AuthorizedRoute.propTypes = {
  token: PropTypes.string,
  logOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  logOut: token => dispatch(actionCreators.logOut(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedRoute);

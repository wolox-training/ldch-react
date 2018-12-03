import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '~redux/Auth/actions';

import Topbar from './components/Topbar';
import Game from './screens/Game';
import Profile from './screens/Profile';

class AuthorizedRoute extends Component {
  handleLogOut = () => this.props.logOut(this.props.token);

  render() {
    const { match } = this.props;
    return !this.props.token ? (
      <Redirect to="/login" />
    ) : (
      <Fragment>
        <Topbar logOut={this.handleLogOut} />
        <Switch>
          <Route path={`${match.path}/game`} component={Game} />
          <Route path={`${match.path}/profile`} render={() => <Profile show />} />
        </Switch>
      </Fragment>
    );
  }
}

AuthorizedRoute.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  token: PropTypes.string,
  logOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  logOut: token => dispatch(actionCreators.logOut(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedRoute);

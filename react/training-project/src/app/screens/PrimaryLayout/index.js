import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* eslint-disable import/order */
import actionCreators from '~redux/Auth/actions';
import { GAME, PROFILE } from '~components/Routes/constants';
import Topbar from '~components/Topbar';

import Game from './screens/Game';
import Profile from './screens/Profile';

class PrimaryLayout extends Component {
  handleLogOut = () => this.props.logOut(this.props.token);

  render() {
    return (
      <Fragment>
        <Topbar logOut={this.handleLogOut} />
        <Switch>
          <Route path={GAME} component={Game} />
          <Route path={PROFILE} render={() => <Profile {...this.props.userdata} />} />
        </Switch>
      </Fragment>
    );
  }
}

PrimaryLayout.propTypes = {
  logOut: PropTypes.func.isRequired,
  userdata: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  userdata: state.auth.userdata
});

const mapDispatchToProps = dispatch => ({
  logOut: token => dispatch(actionCreators.logOut(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLayout);

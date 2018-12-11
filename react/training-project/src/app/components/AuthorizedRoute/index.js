import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LOGIN } from '~components/Routes/constants';

class AuthorizedRoute extends Component {
  render() {
    const { WrappedComponent, token, path } = this.props;
    return !token && path !== LOGIN ? (
      <Redirect to={LOGIN} />
    ) : (
      <Route path={path} render={() => <WrappedComponent />} />
    );
  }
}

AuthorizedRoute.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
  token: PropTypes.string,
  path: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(AuthorizedRoute);

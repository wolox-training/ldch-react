import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '~components/Routes/constants';

class AuthorizedRoute extends Component {
  render() {
    const { WrappedComponent, token, path } = this.props;
    return (
      <Route
        path={path}
        render={props => (!token ? <Redirect to={LOGIN} /> : <WrappedComponent {...props} />)}
      />
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(AuthorizedRoute);

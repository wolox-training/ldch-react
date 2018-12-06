import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import actionCreators from '~redux/Auth/actions';

import LoginForm from './layout';

/* eslint-disable no-func-assign */
class LoginPage extends Component {
  handleSubmit = values => this.props.logIn(values);

  render() {
    return !this.props.token ? (
      <LoginForm
        processing={this.props.processing}
        loginFail={this.props.loginFail}
        onSubmit={this.handleSubmit}
      />
    ) : (
      <Redirect to="/app/game" />
    );
  }
}

LoginPage.propTypes = {
  logIn: PropTypes.func.isRequired,
  loginFail: PropTypes.bool.isRequired,
  token: PropTypes.string,
  processing: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  loginFail: state.auth.loginFail,
  processing: state.auth.processing
});

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(actionCreators.logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

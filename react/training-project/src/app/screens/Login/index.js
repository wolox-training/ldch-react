import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable import/order */
import actionCreators from '~redux/Auth/actions';
import FetchData from '~components/FetchData';
import { GAME } from '~components/Routes/constants';

import LoginForm from './layout';

class LoginPage extends Component {
  handleSubmit = values => this.props.logIn(values);

  render() {
    return !this.props.token ? (
      <FetchData
        loginFail={this.props.loginFail}
        onSubmit={this.handleSubmit}
        WrappedComponent={LoginForm}
        processing={this.props.processing}
      />
    ) : (
      <Redirect to={GAME} />
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

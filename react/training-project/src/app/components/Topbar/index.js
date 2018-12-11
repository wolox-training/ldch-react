import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionCreators from '~redux/Auth/actions';

import Topbar from './layout';

class TopbarContainer extends Component {
  handleLogOut = () => this.props.logOut(this.props.token);

  render() {
    return <Topbar logOut={this.handleLogOut} />;
  }
}

TopbarContainer.propTypes = {
  logOut: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
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
)(TopbarContainer);

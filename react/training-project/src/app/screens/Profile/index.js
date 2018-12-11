import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Profile from './layout';

function ProfileContainer({ userdata }) {
  return <Profile {...userdata} />;
}

const mapStateToProps = state => ({
  userdata: state.auth.userdata
});

ProfileContainer.propTypes = {
  userdata: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(ProfileContainer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PrimaryLayout from '~components/PrimaryLayout';

import ProfileDumb from './layout';

function Profile({ userdata }) {
  return (
    <PrimaryLayout>
      <ProfileDumb {...userdata} />
    </PrimaryLayout>
  );
}

const mapStateToProps = state => ({
  userdata: state.auth.userdata
});

Profile.propTypes = {
  userdata: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(Profile);

import React from 'react';
import { CSSTransition } from 'react-transition-group';

import ProfileDumb from './layout';
import style from './styles.scss';

function Profile() {
  return (
    <CSSTransition
      in
      appear
      timeout={300}
      classNames={{
        appear: style.profileAppear,
        appearActive: style.profileAppearActive
      }}
    >
      <ProfileDumb />
    </CSSTransition>
  );
}

export default Profile;

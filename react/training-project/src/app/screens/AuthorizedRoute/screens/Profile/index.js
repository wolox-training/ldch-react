import React from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './styles.scss';

function Profile({ show }) {
  return (
    <CSSTransition
      in={show}
      appear
      timeout={600}
      classNames={{
        appear: style.fadeAppear,
        appearActive: style.fadeAppearActive
      }}
    >
      <h1>This is the Profile Screen!</h1>
    </CSSTransition>
  );
}

export default Profile;

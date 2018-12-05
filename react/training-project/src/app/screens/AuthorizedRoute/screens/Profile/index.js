import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import defaultPhoto from '~assets/hacker.png';

import { WON, LOST, DRAW } from './constants';
import style from './styles.scss';

function Profile({ name, photoUrl, charge, description, won, lost, draw }) {
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
      <div className={style.profileContainer}>
        <CSSTransition
          in
          appear
          timeout={900}
          classNames={{
            appear: style.photoAppear,
            appearActive: style.photoAppearActive
          }}
        >
          <img className={style.photo} src={!photoUrl ? defaultPhoto : photoUrl} alt="profile" />
        </CSSTransition>
        <h2 className={style.name}>{name}</h2>
        <h4 className={style.charge}>{charge}</h4>
        <p className={style.description}>{description}</p>
        <CSSTransition
          in
          appear
          timeout={600}
          classNames={{
            appear: style.dataAppear,
            appearActive: style.dataAppearActive
          }}
        >
          <div className={style.data}>
            <span>{`${WON}: ${won}`}</span>
            <span>{`${LOST}: ${lost}`}</span>
            <span>{`${DRAW}: ${draw}`}</span>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  draw: PropTypes.number.isRequired
};

export default Profile;

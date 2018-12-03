import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Photo from '~assets/lion.png'; // eslint-disable-line
import style from './styles.scss';

/**
 * TODO: Get Profile data from service with apisauce
 * Handle profile data with redux
 */

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
          <img className={style.photo} src={Photo} alt="profile" />
        </CSSTransition>
        <h2 className={style.name}>León Ceballos</h2>
        <h4 className={style.charge}>Front-End Developer</h4>
        <p className={style.description}>I use to design websites and applications for the web.</p>
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
            <span>Won: 56</span>
            <span>Lost: 20</span>
            <span>Draw: 30</span>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}

export default Profile;

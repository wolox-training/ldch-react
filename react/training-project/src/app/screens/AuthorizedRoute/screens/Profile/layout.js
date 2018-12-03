import React from 'react';

import Photo from '~assets/lion.png';

import style from './styles.scss';

function ProfileDump() {
  return (
    <div className={style.profileContainer}>
      <img className={style.photo} src={Photo} alt="profile" />
      <h2 className={style.name}>León Ceballos</h2>
      <h4 className={style.charge}>Front-End Developer</h4>
      <p className={style.description}>I use to design websites and applications for the web.</p>
      <div className={style.data}>
        <span>Won: 56</span>
        <span>Lost: 20</span>
        <span>Draw: 30</span>
      </div>
    </div>
  );
}

export default ProfileDump;

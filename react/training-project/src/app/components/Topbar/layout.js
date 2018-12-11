import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { GAME, PROFILE as PROFILE_PATH } from '~components/Routes/constants';

import style from './styles.scss';
import { PLAY, PROFILE, LOGOUT } from './constants';

function TopbarDumb({ logOut }) {
  return (
    <nav className={style.navbar}>
      <NavLink className={style.navbarItem} activeClassName={style.active} to={GAME}>
        {PLAY}
      </NavLink>
      <NavLink className={style.navbarItem} activeClassName={style.active} to={PROFILE_PATH}>
        {PROFILE}
      </NavLink>
      <button type="button" onClick={logOut} className={style.navbarButton}>
        {LOGOUT}
      </button>
    </nav>
  );
}

TopbarDumb.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default TopbarDumb;

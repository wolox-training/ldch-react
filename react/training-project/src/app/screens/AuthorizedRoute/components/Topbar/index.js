import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Topbar({ logOut }) {
  return (
    <nav className={style.navbar}>
      <NavLink className={style.navbarItem} activeClassName={style.active} to="/app/game">
        Play
      </NavLink>
      <NavLink className={style.navbarItem} activeClassName={style.active} to="/app/Profile">
        Profile
      </NavLink>
      <button type="button" onClick={logOut} className={style.navbarButton}>
        Log out
      </button>
    </nav>
  );
}

Topbar.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default Topbar;

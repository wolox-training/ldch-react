import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './styles.scss';

function Topbar() {
  return (
    <nav className={style.navbar}>
      <NavLink className={style.navbarItem} activeClassName={style.active} to="/app/game">
        Play
      </NavLink>
      <NavLink className={style.navbarItem} activeClassName={style.active} to="/app/Profile">
        Profile
      </NavLink>
      <button type="button" className={style.navbarButton}>
        Log out
      </button>
    </nav>
  );
}

export default Topbar;

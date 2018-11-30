import React from 'react';
import { NavLink } from 'react-router-dom';

function Topbar() {
  return (
    <nav>
      <NavLink to="/app/game">Play</NavLink>
      <NavLink to="/app/Profile">Profile</NavLink>
    </nav>
  );
}

export default Topbar;

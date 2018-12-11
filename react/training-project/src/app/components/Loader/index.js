import React from 'react';

import style from './styles.scss';

function Loader() {
  return (
    <svg className={style.spinner}>
      <circle className={style.circle} cx="50%" cy="50%" r="25" />
    </svg>
  );
}

export default Loader;

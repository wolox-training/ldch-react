import React from 'react';

import style from './styles.scss';

function Loader() {
  return (
    <div className={style.centerfy}>
      <div className={style.spiner} />
    </div>
  );
}

export default Loader;

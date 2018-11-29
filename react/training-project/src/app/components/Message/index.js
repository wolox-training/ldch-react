import React from 'react';

import style from './styles.scss';

function Message({ children }) {
  return <h3 className={style.error}>{children}</h3>;
}

export default Message;

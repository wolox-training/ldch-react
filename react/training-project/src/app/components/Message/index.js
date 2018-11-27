import React from 'react';

import style from './styles.scss';

function Message({ children }) {
  return <div className={style.error}>{children}</div>;
}

export default Message;

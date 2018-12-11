import React, { Fragment } from 'react';

import Topbar from '~components/Topbar';

function PrimaryLayout({ children }) {
  return (
    <Fragment>
      <Topbar />
      {children}
    </Fragment>
  );
}

export default PrimaryLayout;

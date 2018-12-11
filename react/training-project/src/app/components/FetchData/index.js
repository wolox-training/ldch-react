import React from 'react';

import Loader from '~components/Loader';

function FetchData({ WrappedComponent, processing, ...rest }) {
  return processing ? <Loader /> : <WrappedComponent {...rest} />;
}

export default FetchData;

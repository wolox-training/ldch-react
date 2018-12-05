import React from 'react';

import Loader from '~components/Loader';
/* eslint-disable */

class FetchData extends React.Component {
 render() {
   const {WrappedComponent, processing, ...rest} = this.props;

   return processing ? <Loader /> : <WrappedComponent {...rest}/>
 }
}

export default FetchData;

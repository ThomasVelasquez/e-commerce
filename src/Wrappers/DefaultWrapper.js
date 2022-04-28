import React, { Fragment } from 'react';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';

const DefaultWrapper = ({children}) => {
  return (
    <Fragment>
        <Header />
        <Navigation />
        {children}
    </Fragment>
  );

}

export default DefaultWrapper;
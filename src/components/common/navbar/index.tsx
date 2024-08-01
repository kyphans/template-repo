import React from 'react';
// import { getGeneralInfo } from '@/services/general.services';
import NavBarWrapper from './NavBarWrapper';

const NavBar = async () => {
  // const generalInfo = (await getGeneralInfo()).data;
  // console.log('generalInfo >>>>>>', generalInfo);
  const generalInfo = null;
  if (!generalInfo) {
    return null;
  }
  return <NavBarWrapper data={generalInfo} />;
};

export default NavBar;

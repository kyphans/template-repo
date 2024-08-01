import React from 'react';
import { getGeneralInfo } from '@/services/general.services';
import NavBarWrapper from './NavBarWrapper';

const NavBar = async () => {
  try {
    const generalInfo = (await getGeneralInfo())?.data;
    console.log('generalInfo >>>>>>', generalInfo);
    // const generalInfo = null;
    if (!generalInfo) {
      return null;
    }
    return <NavBarWrapper data={generalInfo} />;
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle the error or display an error message
    return null;
  }
};

export default NavBar;

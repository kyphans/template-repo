import React from 'react';
import { getGeneralInfo } from '@/services/general.services';
import NavBarWrapper from './NavBarWrapper';

const NavBar = async () => {
  try {
    const generalInfo = (await getGeneralInfo())?.data;
    if (!generalInfo) {
      return null;
    }
    return <NavBarWrapper data={generalInfo} />;
  } catch (error) {
    return null;
  }
};

export default NavBar;

import { getGeneralInfo } from '@/services/general.services';
import Image from 'next/image';
import React from 'react';

const Logo = async () => {
  try {
    const generalInfo = await getGeneralInfo();
    const urlAppLogo = generalInfo.data?.appLogo ?? '';
    return <Image src={urlAppLogo} alt='Logo' width={150} height={40} />;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching general info:', error);
    return <Image src={''} alt='Logo' width={150} height={40} />;
  }
};

export default Logo;

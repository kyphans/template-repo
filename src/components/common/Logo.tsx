import Image from 'next/image';
import React from 'react';

const Logo = ({ src }: { src: string }) => {
  return <Image src={src} alt='Logo' width={150} height={40} />;
};

export default Logo;

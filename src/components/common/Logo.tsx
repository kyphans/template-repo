import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ src }: { src: string }) => {
  return (
    <Link href='/'>
      <Image priority draggable={false} src={src} alt='Logo' width={150} height={40} />
    </Link>
  );
};

export default Logo;

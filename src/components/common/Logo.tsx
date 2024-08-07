import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ src }: { src: string }) => {
  return (
    <Link href='/'>
      <Image
        className='w-[150px] h-[60px] object-contain'
        priority
        draggable={false}
        src={src}
        alt='Logo'
        width={150}
        height={60}
      />
    </Link>
  );
};

export default Logo;

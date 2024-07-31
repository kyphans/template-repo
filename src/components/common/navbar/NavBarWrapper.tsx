'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Logo from '../Logo';
import useScrollDirection from '@/hooks/useScrollDirection';
import { IGeneral } from '@/types/general.type';

function NavBarWrapper({ data }: { data: IGeneral }) {
  const scrollDirection = useScrollDirection(20);
  const { appLogo } = data;

  return (
    <nav
      className={cn(
        'w-full z-50 fixed top-0 bg-primary transition-all duration-500 ease-in-out ',
        scrollDirection !== 'down' ? 'bg-primary !shadow-none' : 'bg-white'
      )}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 5px 0px' }}
    >
      <div className={cn('max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20')}>
        <Logo src={appLogo ?? ''} />
      </div>
    </nav>
  );
}

export default NavBarWrapper;

'use client';
import React from 'react';
import { cn } from '@/lib/utils';

function NavBar() {
  return (
    <nav className='bg-white w-full z-50 fixed top-0' style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 5px 0px' }}>
      <div className={cn('max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20')}>
        LOGO
      </div>
    </nav>
  );
}

export default NavBar;

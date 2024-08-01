'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Logo from '../Logo';
import useScrollDirection from '@/hooks/useScrollDirection';
import { IGeneral } from '@/types/general.type';
import Link from 'next/link';

function NavBarWrapper({ data }: { data: IGeneral }) {
  const scrollDirection = useScrollDirection(20);
  const { appLogo, appPageProperties } = data;
  const isScrollingDown = scrollDirection !== 'down';

  return (
    <nav
      className={cn(
        'w-full z-50 fixed top-0 bg-primary transition-all duration-500 ease-in-out ',
        isScrollingDown ? 'bg-primary !shadow-none' : 'bg-primary2'
      )}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 5px 0px' }}
    >
      <div className={cn('container flex justify-between items-center h-20')}>
        <Logo src={appLogo ?? ''} />
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <div className='flex items-center'>
            {appPageProperties?.map((page) => (
              <Link
                key={page.index}
                href={page.path}
                className={cn(
                  'text-sm lg:text-base font-semibold hover:text-gray-900 px-3 py-2',
                  isScrollingDown ? 'text-primary2' : 'text-primary'
                )}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarWrapper;

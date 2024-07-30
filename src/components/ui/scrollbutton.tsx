'use client';
import React, { useEffect } from 'react';
import '../../styles/globals.css';
import { cn } from '@/lib/utils';
import useScrollPastTop from '@/hooks/useScrollPastTop';

function ScrollButton({ scrollTo }: { scrollTo: string }) {
  const scrollPastTop = useScrollPastTop(100);

  useEffect(() => {
    if (window !== undefined) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className={cn('hidden lg:block ', scrollPastTop && 'lg:hidden')}>
      <div className='scroll-btn relative flex justify-center '>
        <a href={`${scrollTo}`} aria-label='Scroll me icon'>
          <span className='mouse'>
            <span />
          </span>
        </a>
        <p>scroll me</p>
      </div>
    </div>
  );
}

export default ScrollButton;

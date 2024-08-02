import React from 'react';
import { Button } from '../ui/button';
import ArrowLeftToRightIcon from '../icons/ArrowLeftToRightIcon';
import { CustomCarousel } from './CustomCarousel';
import { IHomePage } from '@/types/home-page.type';

export const Welcome = ({ data }: { data: IHomePage }): JSX.Element => {
  return (
    <section className='xl:h-[calc(100vh+80px)] bg-primary -mt-40 pt-40 pl-4 md:px-4 lg:pr-0'>
      <div className='h-full content-center xl:max-w-[1650px] xl:ml-auto xl:grid xl:grid-cols-3 xl:space-x-20 xl:pl-10'>
        <div className='flex flex-col justify-center space-y-10 col-span-1'>
          <h1
            className='text-5xl lg:text-6xl xl:text-7xl text-white font-bold pr-4'
            dangerouslySetInnerHTML={{ __html: data.slogan ?? '' }}
          ></h1>{' '}
          <p className='text-lg text-white mt-4 pr-4'>{data.description}</p>
          <Button className='flex items-center space-x-2 w-52 rounded-3xl pr-4' variant={'outline'}>
            <span>{data.book_btn}</span>
            <ArrowLeftToRightIcon className='w-4' />
          </Button>
        </div>
        <div className='col-span-2 mt-10 xl:mt-0'>
          <CustomCarousel data={data.carousel} />
        </div>
      </div>
    </section>
  );
};

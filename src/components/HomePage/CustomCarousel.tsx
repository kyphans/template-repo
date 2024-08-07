'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { type Carousel as CarouselType } from '@/types/home-page.type';
import Image from 'next/image';

export function CustomCarousel({ data }: { data: CarouselType[] | null }): JSX.Element {
  const carouselData = data || [];
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      className='w-full'
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
    >
      <CarouselContent>
        {carouselData.map((_, index) => (
          <CarouselItem
            key={index}
            className='flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_40%]'
          >
            <Card className='h-[400px] w-full sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[450px] rounded-t-[100px] sm:rounded-t-[125px] md:rounded-t-[150px] lg:rounded-t-[175px] xl:rounded-t-[200px] border-0 overflow-hidden'>
              <CardContent className='flex h-full items-center justify-center p-0'>
                {/* <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>{index + 1}</span> */}
                <Image
                  priority
                  width={400}
                  height={400}
                  src={_.image}
                  alt={_.label}
                  className='h-[400px] w-full sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[450px] object-cover'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='relative transform-none translate-x-0 translate-y-0 top-0 left-0 mt-2' />
      <CarouselNext className='relative transform-none translate-x-0 translate-y-0 top-0 left-2 mt-2' />
    </Carousel>
  );
}

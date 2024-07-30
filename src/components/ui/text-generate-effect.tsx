'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    const animationDelay = setTimeout(() => {
      animate(
        'span',
        {
          opacity: 1
        },
        {
          duration: 2,
          delay: stagger(0.2)
        }
      );
    }, 1000);

    // Clear timeout if component unmounts
    return () => clearTimeout(animationDelay);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div initial={false} ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className='opacity-0'>
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn(className)}>{renderWords()}</div>;
};

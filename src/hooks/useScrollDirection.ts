import { useState, useEffect } from 'react';

/**
 * Custom React Hook to determine the direction of scroll.
 *
 * @param pixelThreshold - The minimum number of pixels the user must scroll before the direction is updated. Default is 0.
 * @returns - The current scroll direction ('down', 'up', or null).
 */
const useScrollDirection = (pixelThreshold: number = 0) => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(null);

  useEffect(() => {
    const threshold = pixelThreshold;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    /**
     * Updates the scroll direction based on the current and last scroll position.
     */
    const update = () => {
      const currentScrollY = window.pageYOffset;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
      ticking = false;
    };

    /**
     * Requests an animation frame to update the scroll direction if not already requested.
     */
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => window.removeEventListener('scroll', requestTick);
  }, [pixelThreshold]);

  return scrollDirection;
};

export default useScrollDirection;

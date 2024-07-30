import { useState, useEffect } from 'react';

/**
 * A custom React Hook that determines if the user has scrolled past a certain distance from the top of the page.
 *
 * @param {number} distance - The distance from the top of the page. Default is 0.
 * @returns {boolean} - Returns true if the user has scrolled past the specified distance, otherwise false.
 */
function useScrollPastTop(distance: number = 0): boolean {
  const [scrolledPastTop, setScrolledPastTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > distance;
      setScrolledPastTop(scrolled);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [distance]);

  return scrolledPastTop;
}

export default useScrollPastTop;

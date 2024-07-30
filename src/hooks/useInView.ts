import { useState, useEffect, useRef } from 'react';

/**
 * Custom React Hook to determine if a DOM element is in the viewport.
 *
 * @param {React.RefObject<Element>} target - The DOM element to observe.
 * @param {IntersectionObserverInit} options - The options for the IntersectionObserver.
 *                                             [https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API]
 * @returns {boolean} - Returns true if the target element is in the viewport, otherwise false.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef(null);
 *   const isInView = useInView(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       {isInView ? 'In viewport' : 'Not in viewport'}
 *     </div>
 *   );
 * };
 *
 * In this example, `MyComponent` uses the `useInView` hook to determine if a `div` is in the viewport.
 * When the `div` is in the viewport, it displays 'In viewport'. Otherwise, it displays 'Not in viewport'.
 */
const useInView = (target: React.RefObject<Element>, options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer.current?.disconnect();

    if (target.current) {
      const _observer = new IntersectionObserver(callback, options);
      _observer.observe(target.current);
      observer.current = _observer;
    }

    return () => {
      observer.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.current, options.root, options.rootMargin, options.threshold]);

  return isIntersecting;
};

export default useInView;

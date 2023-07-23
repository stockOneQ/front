import { useEffect, useState } from 'react';

/** scroll시에만 scroll 보이게 하기 */
const useScroll = () => {
  const [isScroll, setIsScroll] = useState(-100);
  const [hideScroll, setHideScroll] = useState(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    setHideScroll(false);
    setIsScroll(e.currentTarget.scrollTop);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideScroll(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isScroll])

  return { hideScroll, scrollHandler };
};

export default useScroll;
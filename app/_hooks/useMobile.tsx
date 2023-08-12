'use client';

import { useLayoutEffect, useState } from 'react';

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return isMobile;
}

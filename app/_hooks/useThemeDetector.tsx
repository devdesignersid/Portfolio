'use client';

import { useEffect, useState } from 'react';

const useThemeDetector = () => {
  const getCurrentTheme = () => {
    if (typeof window !== 'undefined')
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return false;
  };
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return [isDarkTheme, setIsDarkTheme];
};

export default useThemeDetector;

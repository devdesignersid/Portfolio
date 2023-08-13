'use client';

import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Navbar from './Navbar';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import MobileNav from './MobileNav';
import useThemeDetector from '../_hooks/useThemeDetector';

export default function Header() {
  const [mounted, setIsMounted] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemDarkTheme] = useThemeDetector();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsDarkMode(!!isSystemDarkTheme);
    }
  }, [mounted]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='sticky top-0 z-50 flex w-full items-center justify-between bg-portfolio-background px-large py-large md:px-[32px]'>
      <Logo />
      <DarkModeSwitch
        className='mr-large'
        checked={isDarkMode}
        sunColor='#f3b61f'
        moonColor='#B4CDED'
        onChange={(checked: boolean) => {
          setIsDarkMode(checked);
        }}
        size={32}
      />
      <HamburgerButton
        isOpen={isMobileNavOpen}
        handleClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
      <MobileNav isOpen={isMobileNavOpen} />
      <Navbar />
    </header>
  );
}

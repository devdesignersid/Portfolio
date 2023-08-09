'use client';

import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Navbar from './Navbar';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='sticky top-0 flex w-full items-center justify-between bg-portfolio-background px-large py-large'>
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

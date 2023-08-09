'use client';

import React from 'react';

type HamburgerButtonProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export default function HamburgerButton({
  isOpen,
  handleClick: onClick,
}: HamburgerButtonProps) {
  const genericHamburgerLine = `h-[4px] w-[24px] mx-[2px] my-[2px] rounded-full bg-portfolio-text transition ease transform duration-300`;

  return (
    <button
      className='group flex h-[32px] w-[32px] flex-col items-center justify-center rounded '
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'translate-y-2 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-100 group-hover:opacity-100'
        }`}
      ></div>
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'group-hover:opacity-100'
        }`}
      ></div>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-translate-y-2 -rotate-45  opacity-50 group-hover:opacity-100'
            : 'opacity-100 group-hover:opacity-100'
        }`}
      ></div>
    </button>
  );
}

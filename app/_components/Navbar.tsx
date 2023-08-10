import React from 'react';
import ScrollLink from './ScrollLink';

export default function Navbar() {
  return (
    <nav className=''>
      <ul className='flex [&>li*:first-child]:ml-0  [&>li>a]:font-secondary [&>li>a]:text-[16px] [&>li>a]:text-[rgb(138,43,226)] [&>li]:ml-[24px]'>
        <li>
          <ScrollLink href='#about'>About</ScrollLink>
        </li>
        <li>
          <ScrollLink href='#experience'>Experience</ScrollLink>
        </li>
        <li>
          <ScrollLink href='#contact'>Contact</ScrollLink>
        </li>
        <li>
          <a
            className='rounded bg-[#8A2BE2] px-medium py-small !text-[#F0F4EF]'
            href='/resume.pdf'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

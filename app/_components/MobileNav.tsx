import React from 'react';
import ScrollLink from './ScrollLink';

type MobileNavProps = {
  isOpen: boolean;
};

export default function MobileNav({ isOpen }: MobileNavProps) {
  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav
      className={`ease absolute left-[0] top-[104px] flex w-[100vw] overflow-y-hidden bg-portfolio-background transition-[max-height,padding] duration-300 ${
        isOpen ? `max-h-80 pb-[24px] shadow-xl` : `max-h-0 py-[0]`
      }`}
    >
      <ul className='flex w-full flex-col'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <ScrollLink
              className='block px-small py-large text-center font-secondary text-[14px] !font-[600] text-[#8A2BE2]'
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </ScrollLink>
          </li>
        ))}
        <li className='mt-small block px-small py-medium text-center font-secondary text-[14px] font-[600] text-[#8A2BE2]'>
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

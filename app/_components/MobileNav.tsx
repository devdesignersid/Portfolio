import React from 'react';
import ScrollLink from './ScrollLink';

type MobileNavProps = {
  isOpen: boolean;
};

export default function MobileNav({ isOpen }: MobileNavProps) {
  const menuItems = ['About', 'Experience', 'Contact', 'Resume'];

  return (
    <nav
      className={`ease absolute left-[0] top-[104px] flex w-[100vw] overflow-y-hidden bg-portfolio-background transition-[max-height,padding] duration-300 ${
        isOpen ? `max-h-60 py-[24px] shadow-xl` : `max-h-0 py-[0]`
      }`}
    >
      <ul className='flex w-full flex-col'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <ScrollLink
              className='block px-small py-medium text-center font-secondary text-[#8A2BE2]'
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

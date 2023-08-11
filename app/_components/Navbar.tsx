import React from 'react';
import ScrollLink from './ScrollLink';

export default function Navbar() {
  return (
    <nav className=''>
      <ul className='flex [&>li*:first-child]:ml-0   [&>li>a]:font-secondary [&>li>a]:text-[14px] [&>li>a]:font-[600] [&>li>a]:text-[rgb(138,43,226)] '>
        <li>
          <ScrollLink
            className='transform-[bg,color]  mr-small px-medium py-small duration-200 hover:rounded hover:bg-[#B4CDED] hover:text-portfolio-background'
            href='#about'
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className='transform-[bg,color] mr-small px-medium py-small duration-200 hover:rounded hover:bg-[#B4CDED] hover:text-portfolio-background'
            href='#experience'
          >
            Experience
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className='transform-[bg,color] mr-small px-medium py-small duration-200 hover:rounded hover:bg-[#B4CDED] hover:text-portfolio-background'
            href='#projects'
          >
            Projects
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            className='transform-[bg,color] mr-small px-medium py-small duration-200 hover:rounded hover:bg-[#B4CDED] hover:text-portfolio-background'
            href='#contact'
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <a
            className='rounded bg-[#8A2BE2] px-medium py-small !text-[#F0F4EF]'
            target='_blank'
            rel='noreferrer'
            href='/resume.pdf'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

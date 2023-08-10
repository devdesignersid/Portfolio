import React from 'react';
import Contact from './Contact';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center bg-portfolio-background py-[32px]'>
      <Contact />
      <div>
        <p className='font-secondary text-[14px] text-portfolio-text'>
          Made with ✨ by yours truly
        </p>
      </div>
    </footer>
  );
}

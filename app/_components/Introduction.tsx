import React from 'react';

export default function Introduction() {
  return (
    <section className='flex h-[calc(100vh-104px)] items-center justify-center bg-portfolio-background px-[18px]'>
      <div className='flex flex-col items-center text-portfolio-text'>
        <p className='mb-[8px] font-tertiary text-[14px]'>
          Greetings, Traveler! I am
        </p>
        <h1 className='font-primary  text-[24px] text-[#f3b61f]'>
          Siddharth S Kumar
        </h1>
        <h1 className='w-[350px] text-center font-primary text-[22px]'>
          Embarking on Epic Quests as a{' '}
          <span className='text-[#f3b61f]'>Senior Backend Sorcerer</span>
        </h1>
        <p className='mt-small w-[250px] text-center font-tertiary text-[16px]'>
          Step into the Enchanted Realm of My Digital Odyssey
        </p>
        <a
          href='#'
          className='mt-[64px] inline-flex border-b-2 border-[#8A2BE2] font-secondary text-[14px] text-[#8A2BE2]'
        >
          Begin Your Journey &#8594;
        </a>
      </div>
    </section>
  );
}

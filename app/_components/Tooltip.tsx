import React, { PropsWithChildren } from 'react';

type TooltipProps = { message: string } & PropsWithChildren;

export default function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className='group flex'>
      {children}
      <span className='text absolute top-large  z-40 max-w-[156px] scale-0 rounded bg-portfolio-text p-2 font-tertiary  text-xs text-portfolio-background transition-all group-hover:scale-100'>
        {message}
      </span>
    </div>
  );
}

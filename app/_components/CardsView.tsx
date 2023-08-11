import React, { PropsWithChildren } from 'react';

type CardViewProps = {} & PropsWithChildren;

export default function CardsView({ children }: CardViewProps) {
  return (
    <div className='mt-large [&>div:last-child]:mb-0 [&>div]:mb-large'>
      {children}
    </div>
  );
}

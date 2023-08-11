import Image from 'next/image';
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

export default function Card({
  title,
  description,
  tags = [],
  thumbnail,
}: CardProps) {
  return (
    <div className='flex w-full items-center rounded bg-portfolio-backgroundHighlight px-medium py-medium shadow-md'>
      <div className='max-h-[96px] min-w-[96px] rounded bg-portfolio-backgroundHighlight'>
        <Image
          className='h-[96px] w-[96px] rounded'
          width={96}
          height={96}
          src={thumbnail}
          alt={`${title}-thumbnail`}
        />
      </div>
      <div className=' ml-large flex max-h-[96px] min-w-0 flex-col'>
        <p className='mb-[4px] font-tertiary font-[600] text-portfolio-text'>
          {title}
        </p>

        <p className='mb-[4px] line-clamp-2 overflow-hidden text-ellipsis font-tertiary text-[14px] text-portfolio-text'>
          {description}
        </p>
        <ul className=' flex flex-wrap text-[14px] [&>li:last-child]:mr-0 [&>li:last-child]:before:content-[""] [&>li:last-child]:after:content-[""]  [&>li]:mr-[2px] [&>li]:before:content-["#"] [&>li]:after:content-[",_"]'>
          <li className='font-secondary text-[#8A2BE2]'>{tags[0]}</li>
          {tags.length - 1 <= 0 ? null : (
            <li className='font-secondary text-[#8A2BE2]'>
              &nbsp;+{tags.length - 1} more
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

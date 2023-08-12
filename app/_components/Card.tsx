import Image from 'next/image';
import React from 'react';

import useMobile from '../_hooks/useMobile';
import Tooltip from './Tooltip';

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
  const tagsListBaseStyle = `flex flex-wrap text-[14px] [&>li:last-child]:mr-0  [&>li:last-child]:after:content-[""]  [&>li]:mr-[2px] [&>li]:before:content-["#"] [&>li]:after:content-[",_"]`;
  const tagElems = [];
  const isMobile = useMobile();
  const numOfTagsToBeDisplayed = isMobile ? 4 : 7;

  for (let i = 0; i < tags.length; i += 1) {
    if (i === numOfTagsToBeDisplayed) break;
    tagElems.push(
      <li className='font-secondary text-[#8A2BE2]' key={i}>
        {tags[i]}&nbsp;
      </li>
    );
  }

  return (
    <div className='flex min-h-[132px] w-full cursor-pointer items-center rounded bg-portfolio-backgroundHighlight px-medium py-medium shadow-md hover:scale-105'>
      <div className='max-h-[96px] min-w-[96px] rounded bg-portfolio-backgroundHighlight'>
        <Image
          className='h-[96px] w-[96px] rounded'
          width={96}
          height={96}
          src={thumbnail}
          alt={`${title}-thumbnail`}
        />
      </div>
      <div className=' relative ml-large flex max-h-[96px] min-w-0 flex-col'>
        <p className='mb-[4px] font-tertiary font-[600] text-portfolio-text'>
          {title}
        </p>

        <p className='mb-small line-clamp-2 overflow-hidden text-ellipsis font-tertiary text-[14px] text-portfolio-text'>
          {description}
        </p>

        <ul
          className={`${tagsListBaseStyle} ${
            tags.length > numOfTagsToBeDisplayed &&
            '[&>li:last-child]:before:content-[""]'
          }  line-clamp-1 min-w-0`}
        >
          {tagElems}
          {tags.length > numOfTagsToBeDisplayed && (
            <li className='font-secondary text-[#8A2BE2]'>
              <Tooltip
                message={tags
                  .slice(numOfTagsToBeDisplayed, tags.length)
                  .join(', ')}
              >
                +{tags.length - numOfTagsToBeDisplayed} more
              </Tooltip>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

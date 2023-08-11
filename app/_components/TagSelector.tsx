'use client';

import React from 'react';

type TagSelectorProps = {
  tags: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TagSelector({
  tags,
  selected,
  setSelected,
}: TagSelectorProps) {
  const basicButtonStyle = `mt-small box-border h-[32px] min-w-[72px]  rounded-full border border-[#009ffd] px-medium text-[14px] text-portfolio-text font-secondary font-[500]`;

  const isSelected = (tag: string): boolean => selected.includes(tag);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const tag = (event.target as HTMLInputElement).value;
    if (selected.includes(tag)) {
      setSelected((current) => current.filter((item) => item !== tag));
    } else {
      setSelected((current) => [...current, tag]);
    }
  };

  return (
    <div>
      <ul className='flex flex-wrap rounded border border-[#009ffd] px-medium py-large  [&>li]:ml-small'>
        {tags.map(function (tag: string, index: number) {
          return (
            <li key={index}>
              <button
                value={tag}
                onClick={handleClick}
                className={`${basicButtonStyle} ${
                  isSelected(tag)
                    ? `bg-[#009ffd] text-portfolio-background`
                    : ''
                }`}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

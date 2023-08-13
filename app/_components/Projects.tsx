'use client';

import React, { useState } from 'react';
import TagSelector from './TagSelector';
import CardsView from './CardsView';
import Card from './Card';
import openInNewTab from '../_utils/openInNewTab';

type Project = {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  url: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Portfolio',
      description: "Sid's personal website",
      thumbnail:
        'https://cdn3d.iconscout.com/3d/free/thumb/free-github-5622954-4684832.png',
      tags: ['NextJs', 'TailwindCss', 'React', 'Typescript', 'Vercel'],
      url: 'https://github.com/devdesignersid/portfolio',
    },
    {
      title: 'Pulsebase',
      description: 'A NestJs, MikrOrm boilerplate',
      thumbnail:
        'https://cdn3d.iconscout.com/3d/free/thumb/free-github-5622954-4684832.png',
      tags: ['NestJs', 'MikrOrm', 'Node', 'Postgres', 'Typescript'],
      url: 'https://github.com/devdesignersid/pulsebase',
    },
  ];

  let tags: string[] = [];
  projects.forEach((project) => tags.push(...project.tags));
  tags = tags.reduce(function (a: string[], b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  const [selectedTags, setSelectedTags] = useState<string[]>([...tags]);
  return (
    <section
      id='projects'
      className='flex-col items-center justify-center bg-portfolio-background px-[18px] pb-[32px]'
    >
      <div className='mx-auto my-0 flex-col items-center pt-[32px]  md:max-w-[500px]'>
        <h1 className=' mb-[32px] text-center font-primary text-[20px] text-[#f3b61f]'>
          Projects
        </h1>
        <TagSelector
          tags={tags}
          selected={selectedTags}
          setSelected={setSelectedTags}
        />
        <CardsView>
          {projects
            .filter((project) =>
              project.tags.some((tag) => selectedTags.includes(tag))
            )
            .map(function (
              { title, description, thumbnail, tags: projectTags, url },
              index
            ) {
              return (
                <Card
                  key={index}
                  title={title}
                  description={description}
                  thumbnail={thumbnail}
                  tags={projectTags}
                  onClick={() => openInNewTab(url)}
                />
              );
            })}
        </CardsView>
      </div>
    </section>
  );
}

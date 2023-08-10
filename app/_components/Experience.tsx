import React from 'react';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';

type ExperienceType = {
  title: string;
  date: string;
  location: string;
  achievements: string[];
};

const experiences: ExperienceType[] = [
  {
    title: 'Associate Software Engineer',
    location: 'Neuroplex, Trivandrum (India)',
    date: 'JUL 2019',
    achievements: [
      'Designed and developed frontend, backend, and API for computer vision-based analytics platform at IndianOil gas stations',
      'Collaborated with engineers to create platform for gas station monitoring and insights',
      'Employed Node.js, React, Kafka, and MongoDB technologies',
      'Created frontend, backend, and API for Computer Vision-based Employee Attendance System at Kerala Startup Mission, Futurelab.',
    ],
  },
  {
    title: 'Software Engineer',
    location: 'Chisquare Labs, Kochi (India)',
    date: 'DEC 2020',
    achievements: [
      'Built and maintained a secure HIPAA-compliant data storage and retrieval system',
      'Developed a reliable and secure system independently, addressing issues effectively while ensuring strict adherence to regulations',
      'Achieved a significant 10x performance improvement by enhancing a file encryption service using multi-threading, optimizing system efficiency',
      'Created a ReactJS Chrome extension to elevate customer experience by streamlining information retrieval, saving time, and enhancing accessibility',
    ],
  },
  {
    title: 'Senior Software Engineer',
    location: 'Keyvalue Software Systems, Kochi (India)',
    date: 'JAN 2022',
    achievements: [
      'Led a team of nine developers in building an E-Commerce as a Service platform',
      'Conducted extensive research and spearheaded the development of the Shopify platform integration for a "Social Commerce" solution',
      'Developed and seamlessly integrated various essential services, including Auditing Service, Notification Service into an Online Asset Management platform',
      'Mentored junior team members, fostering growth and skill development',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='flex-col items-center justify-center bg-portfolio-background px-[18px] pb-[32px]'
    >
      <div className='mx-auto my-0 flex-col items-center pt-[32px] text-center md:max-w-[500px]'>
        <h1 className=' mb-[32px] font-primary text-[20px] text-[#f3b61f]'>
          Experience
        </h1>
        <Timeline>
          {experiences.map(function (
            { title, location, date, achievements }: ExperienceType,
            index
          ) {
            return (
              <TimelineItem
                title={title}
                meta={location}
                date={date}
                key={index}
              >
                <ul className='list-disc'>
                  {achievements.map((achievement: string, i) => {
                    return <li key={i}>{achievement}</li>;
                  })}
                </ul>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}

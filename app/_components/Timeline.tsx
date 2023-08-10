import React from 'react';

type TimelineProps = {
  children: React.ReactNode;
};

export default function Timeline({ children }: TimelineProps) {
  return <div className='-my-6'>{children}</div>;
}

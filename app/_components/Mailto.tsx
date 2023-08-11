import React, { PropsWithChildren } from 'react';

type MailtoProps = {
  email: string;
  subject?: string;
  body?: string;
} & PropsWithChildren;

export default function Mailto({
  email,
  subject = '',
  body = ' ',
  children,
}: MailtoProps) {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
}

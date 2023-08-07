import './globals.css';
import type { Metadata } from 'next';
import { Merriweather, Nunito, Heebo } from 'next/font/google';

const primaryFont = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-primary',
  display: 'swap',
});
const secondaryFont = Nunito({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-secondary',
  display: 'swap',
});
const tertiaryFont = Heebo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tertiary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Siddharth S Kumar - Senior Backend Sorcerer & Digital Adventurer',
  description:
    'Crafting code-driven epics and shaping the digital future. Join the adventure with a Senior Backend Sorcerer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          primaryFont.variable,
          secondaryFont.variable,
          tertiaryFont.variable,
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  );
}

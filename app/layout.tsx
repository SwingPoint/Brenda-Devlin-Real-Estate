import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brendadevlin.com'),
  title: 'Brenda Devlin Real Estate - Coachella Valley Expert',
  description: 'Leading with heart, experience and integrity. Your trusted Coachella Valley real estate expert available 24/7.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

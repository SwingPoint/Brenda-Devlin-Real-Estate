import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://brendadevlin.com'),
  title: {
    default: 'Brenda Devlin Real Estate - Coachella Valley Expert',
    template: '%s | Brenda Devlin Real Estate'
  },
  description: 'Trusted Coachella Valley real estate agent. 23 years experience, 600+ homes sold, $400M+ in sales. Available 24/7 for all your needs.',
  keywords: ['Coachella Valley real estate', 'Palm Desert realtor', 'Brenda Devlin', 'luxury homes', 'real estate agent'],
  authors: [{ name: 'Brenda Devlin' }],
  creator: 'Brenda Devlin Real Estate',
  publisher: 'Brenda Devlin Real Estate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brendadevlin.com',
    siteName: 'Brenda Devlin Real Estate',
    title: 'Brenda Devlin Real Estate - Coachella Valley Expert',
    description: 'Your trusted Coachella Valley real estate expert with 23 years of experience. Available 24/7.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brenda Devlin Real Estate',
    description: 'Your trusted Coachella Valley real estate expert',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

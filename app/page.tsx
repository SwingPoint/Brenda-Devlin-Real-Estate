import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

const business = businessesData[0];

export const metadata: Metadata = {
  title: `${business.name} - ${business.areaServed} Real Estate Expert`,
  description: `${business.tagline} Serving the entire ${business.areaServed}. Available 24/7 for all your real estate needs.`,
  keywords: [
    'Coachella Valley real estate',
    'Palm Desert realtor',
    'real estate agent',
    'Brenda Devlin',
    'homes for sale',
    'virtual staging',
  ],
  openGraph: {
    title: `${business.name} - ${business.areaServed} Real Estate Expert`,
    description: business.tagline,
    type: 'website',
    locale: 'en_US',
    siteName: business.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HomePage() {
  // Organization Schema for homepage
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: business.name,
    description: business.description,
    url: `https://${business.website.replace('https://', '')}`,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: business.areaServed,
    },
    sameAs: business.sameAs,
    openingHours: business.openingHours,
    priceRange: business.priceRange,
    image: business.image,
  };

  // WebSite Schema for homepage
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: `https://${business.website.replace('https://', '')}`,
    description: business.description,
    publisher: {
      '@type': 'RealEstateAgent',
      name: business.name,
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <div className="hero-section">
        <div className="container">
          <h1>{business.name}</h1>
          <p className="tagline">{business.tagline}</p>
          <p className="description">{business.description}</p>
          <Link href={`/business/${business.slug}`} className="btn">
            Get in Touch →
          </Link>
        </div>
      </div>

      <main className="container">
        <section className="section">
          <h2 className="section-title">Why Choose Brenda Devlin?</h2>
          <div className="card">
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              With deep expertise in the {business.areaServed} real estate market, I bring a unique blend
              of cutting-edge technology and personal touch to every transaction. From AI-powered marketing
              to virtual staging, I leverage the latest tools while never losing sight of what matters most
              – your goals, your timeline, and your peace of mind.
            </p>
          </div>

          <h3 className="section-title" style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
            My Services
          </h3>
          <div className="services-grid">
            {business.services.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Quick Links</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/business/${business.slug}`} className="btn">
              Contact & Location
            </Link>
            <Link href="/faq" className="btn" style={{ background: 'var(--primary)' }}>
              Common Questions (FAQ)
            </Link>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Connect With Me</h2>
          <div className="social-links">
            <a
              href={business.sameAs[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook →
            </a>
            <a
              href={business.sameAs[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram →
            </a>
            <a
              href={business.sameAs[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn →
            </a>
            <a
              href={`https://${business.website.replace('https://', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Official Website →
            </a>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Serving the Entire Coachella Valley</h2>
          <div className="card">
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              I work with buyers and sellers throughout the Coachella Valley, including Palm Desert,
              Palm Springs, Rancho Mirage, La Quinta, Indian Wells, Cathedral City, Indio, and beyond.
              Whether you're looking for a luxury estate, a vacation home, or your first property,
              I'm here to help you every step of the way.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href={`tel:${business.phone.replace(/\D/g, '')}`}>{business.phone}</a>
          {' • '}
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </footer>
    </>
  );
}

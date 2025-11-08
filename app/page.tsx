import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

const business = businessesData[0];

export const metadata: Metadata = {
  title: `${business.name} - ${business.areaServed} Real Estate Expert`,
  description: `${business.description} Serving the entire ${business.areaServed} with 36 years of experience, 600+ properties sold, and $400M+ in closed sales. Available 24/7 for all your real estate needs.`,
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

      <header className="hero-section">
        <div className="container">
          <h1>{business.name}</h1>
          <p className="tagline">{business.tagline}</p>
          <p className="description">{business.description}</p>
          <nav>
            <Link href={`/business/${business.slug}`} className="btn">
              Get in Touch →
            </Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <article>
          <section className="section">
            <h2 className="section-title">Proven Track Record of Excellence</h2>
            <Stats stats={business.stats} />
          </section>

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
              Comprehensive Real Estate Services
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
            <h2 className="section-title">What My Clients Say</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'center' }}>
              Don't just take my word for it. Here's what satisfied clients across the Coachella Valley have to say about their experience working with me:
            </p>
            <Testimonials testimonials={business.testimonials} limit={3} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href={`/business/${business.slug}`} className="btn">
                See All Testimonials →
              </Link>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Learn More About My Services</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={`/business/${business.slug}`} className="btn">
                Contact & Location Info
              </Link>
              <Link href="/faq" className="btn" style={{ background: 'var(--primary)' }}>
                Frequently Asked Questions
              </Link>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Connect With Me on Social Media</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'center' }}>
              Stay updated with the latest market insights, new listings, and real estate tips by following me on social media:
            </p>
            <nav className="social-links">
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
            </nav>
          </section>

          <section className="section">
            <h2 className="section-title">Serving the Entire Coachella Valley</h2>
            <div className="card">
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                Your Local Real Estate Expert
              </h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                I work with buyers and sellers throughout the Coachella Valley, including <strong>Palm Desert</strong>,
                <strong> Palm Springs</strong>, <strong>Rancho Mirage</strong>, <strong>La Quinta</strong>, <strong>Indian Wells</strong>, 
                <strong> Cathedral City</strong>, <strong>Indio</strong>, and beyond.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Whether you're looking for a <Link href="/faq" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>luxury estate</Link>, 
                a vacation home, or your first property, I'm here to help you every step of the way with personalized service and expert guidance.
              </p>
            </div>
          </section>
        </article>
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

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { NapBlock } from '@/components/NapBlock';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  return businessesData.map((business) => ({
    slug: business.slug,
  }));
}

// Generate metadata for each business page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = businessesData.find((b) => b.slug === slug);

  if (!business) {
    return {
      title: 'Business Not Found',
    };
  }

  return {
    title: `${business.name} - Contact & Location | ${business.areaServed}`,
    description: `Contact ${business.name} at ${business.phone}. ${business.description}`,
    keywords: [
      business.name,
      business.areaServed,
      'real estate',
      'contact',
      'location',
      business.address.addressLocality,
    ],
    openGraph: {
      title: `${business.name} - ${business.areaServed} Real Estate`,
      description: business.tagline,
      type: 'business.business',
      locale: 'en_US',
    },
    alternates: {
      canonical: `/business/${business.slug}`,
    },
  };
}

export default async function BusinessPage({ params }: PageProps) {
  const { slug } = await params;
  const business = businessesData.find((b) => b.slug === slug);

  if (!business) {
    notFound();
  }

  // Comprehensive LocalBusiness/RealEstateAgent Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': business.type,
    '@id': `https://brendadevlin.com/business/${business.slug}`,
    name: business.name,
    description: business.description,
    image: business.image,
    url: `https://${business.website.replace('https://', '')}`,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: {
      '@type': 'City',
      name: business.areaServed,
    },
    sameAs: business.sameAs,
    hasMap: business.mapLink,
  };

  // Person Schema for Brenda Devlin
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brenda Devlin',
    jobTitle: 'Real Estate Agent',
    description: business.description,
    telephone: business.phone,
    email: business.email,
    url: `https://${business.website.replace('https://', '')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    sameAs: business.sameAs,
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Services',
    provider: {
      '@type': 'RealEstateAgent',
      name: business.name,
    },
    areaServed: {
      '@type': 'City',
      name: business.areaServed,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: business.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={serviceSchema} />

      <header className="header">
        <div className="container">
          <h1>{business.name}</h1>
          <p>{business.tagline}</p>
        </div>
      </header>

      <main className="container">
        <nav style={{ margin: '1rem 0' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </nav>

        <section className="section">
          <h2 className="section-title">About {business.name}</h2>
          <div className="card">
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              {business.description}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Based in {business.address.addressLocality}, I serve clients throughout the entire{' '}
              {business.areaServed}. My approach combines {business.brandVoice.toLowerCase()} service
              with cutting-edge technology to deliver exceptional results for every client.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Information</h2>
          <div className="card">
            <NapBlock
              name={business.name}
              streetAddress={business.address.streetAddress}
              addressLocality={business.address.addressLocality}
              addressRegion={business.address.addressRegion}
              postalCode={business.address.postalCode}
              phone={business.phone}
              email={business.email}
              mapLink={business.mapLink}
              hours={business.openingHoursDisplay}
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Services Offered</h2>
          <div className="services-grid">
            {business.services.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              Why Work With Me?
            </h3>
            <ul style={{ fontSize: '1.125rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Available 24/7 to answer your questions and address concerns</li>
              <li>Deep local knowledge of the Coachella Valley market</li>
              <li>Cutting-edge marketing with AI tools and virtual staging</li>
              <li>Personalized approach treating every client like family</li>
              <li>Proven track record of successful transactions</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              How do you market properties?
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              I share valuable content to attract and engage potential buyers, using a mix of
              professional photography, virtual staging, and AI-powered tools to showcase your
              property in the best possible light across all platforms.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              How long does it typically take to sell a home in the Coachella Valley?
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Most properties sell within 3-6 months, depending on market conditions, pricing
              strategy, location, and property condition. I work closely with you to develop a
              custom marketing plan that aligns with your timeline.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              What technology do you use?
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              I leverage cutting-edge real estate content creation, AI tools, large language model
              (LLM) technology, and virtual staging to give your property maximum exposure and
              appeal. This modern approach helps homes sell faster and for top dollar.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/faq" className="btn">
              View Full FAQ Page →
            </Link>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Connect on Social Media</h2>
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
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Get Started?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.95 }}>
              Contact me today for a free consultation about your real estate needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${business.phone.replace(/\D/g, '')}`}
                className="btn"
                style={{ background: 'white', color: 'var(--primary)' }}
              >
                Call {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="btn"
                style={{ background: 'var(--secondary)' }}
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Serving the entire {business.areaServed} with dedication and expertise.
        </p>
      </footer>
    </>
  );
}

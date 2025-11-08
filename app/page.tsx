import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

const business = businessesData[0];

export const metadata: Metadata = {
  title: `${business.name} - ${business.areaServed} Real Estate Expert`,
  description: 'Coachella Valley real estate expert with 36 years experience, 600+ properties sold, $400M+ in sales. Available 24/7 for buyers and sellers.',
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

  // AggregateRating Schema
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: business.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: business.testimonials.length,
      bestRating: '5',
      worstRating: '5',
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={aggregateRatingSchema} />

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
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              With over 600 properties sold and more than $400 million in closed transactions since 1988, I've built a reputation for delivering exceptional results across the Coachella Valley. My 36 years of continuous service means I've navigated every type of market condition to ensure my clients' success.
            </p>
            <Stats stats={business.stats} />
            
            <div className="card" style={{ marginTop: '3rem', background: 'var(--bg-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>
                By The Numbers: Real Results Since 1988
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.0625rem', lineHeight: '2' }}>
                  <li>✓ <strong>600+</strong> properties successfully sold</li>
                  <li>✓ <strong>$400+ million</strong> in total sales volume</li>
                  <li>✓ <strong>36 years</strong> of continuous service</li>
                  <li>✓ <strong>24/7/365</strong> availability</li>
                  <li>✓ <strong>5.0 stars</strong> average client rating</li>
                </ul>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.0625rem', lineHeight: '2' }}>
                  <li>✓ <strong>6 verified</strong> client testimonials</li>
                  <li>✓ <strong>98%</strong> client retention rate</li>
                  <li>✓ <strong>85%</strong> business from referrals</li>
                  <li>✓ <strong>50+</strong> families helped in 2024</li>
                  <li>✓ <strong>2 hours</strong> average response time</li>
                </ul>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.0625rem', lineHeight: '2' }}>
                  <li>✓ <strong>$200K - $15M</strong> price range sold</li>
                  <li>✓ <strong>$5K - $15K</strong> saved on staging</li>
                  <li>✓ <strong>7 cities</strong> served in Coachella Valley</li>
                  <li>✓ <strong>100%</strong> personalized service</li>
                  <li>✓ <strong>Since 1988</strong> serving the desert</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Why Choose Brenda Devlin?</h2>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                Experience Meets Innovation in Coachella Valley
              </h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Since 1988, I've built <strong>36 years of deep expertise</strong> in the {business.areaServed} real estate market. I bring a unique blend
                of cutting-edge technology and personal touch to every transaction. Having successfully closed <strong>over 600 properties</strong> totaling <strong>more than $400 million in sales</strong>, I consistently achieve results that exceed expectations. In 2024 alone, I've helped over 50 families find their perfect home in the desert.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                From AI-powered marketing to professional virtual staging (saving sellers an average of $5,000-$15,000 in traditional staging costs), I leverage the latest tools while never losing sight of what matters most
                – your goals, your timeline, and your peace of mind. My average client works with me within 24 hours of first contact.
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
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
              Perfect 5.0 Star Rating from Real Clients
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'center' }}>
              Don't just take my word for it. Here's what satisfied clients across the Coachella Valley have to say about their experience working with me. All <strong>{business.testimonials.length} reviews</strong> maintain a perfect <strong>5-star rating</strong>:
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
                Your Local Real Estate Expert with Unmatched Market Knowledge
              </h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                I work with buyers and sellers throughout the Coachella Valley, including <strong>Palm Desert</strong>,
                <strong> Palm Springs</strong>, <strong>Rancho Mirage</strong>, <strong>La Quinta</strong>, <strong>Indian Wells</strong>, 
                <strong> Cathedral City</strong>, <strong>Indio</strong>, and beyond. With an average client satisfaction rating of <strong>5.0 out of 5.0 stars</strong> based on 6 verified reviews and a 98% client retention rate, my commitment to excellence is proven. Over 85% of my business comes from repeat clients and referrals.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Whether you're looking for a luxury estate (I've sold properties ranging from $200,000 to $15 million), 
                a vacation home, or your first property, I'm here to help you every step of the way with personalized service and expert guidance. Available <strong>24 hours a day, 7 days a week, 365 days a year</strong> because your real estate needs don't follow a 9-to-5 schedule. I typically respond to inquiries within 2 hours.
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

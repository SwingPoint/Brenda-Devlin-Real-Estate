import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

const business = businessesData[0];

export const metadata: Metadata = {
  title: `FAQ - ${business.name} | Common Real Estate Questions`,
  description: `Frequently asked questions about working with ${business.name} in the ${business.areaServed}. Learn about timelines, marketing strategies, and technology.`,
  keywords: [
    'real estate FAQ',
    'Coachella Valley real estate questions',
    'how long to sell a home',
    'real estate marketing',
    'virtual staging',
  ],
  openGraph: {
    title: `FAQ - ${business.name}`,
    description: 'Get answers to common questions about buying and selling real estate in the Coachella Valley.',
    type: 'website',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  // FAQPage Schema - Critical for AI Optimization
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do you market properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I share valuable content to attract and engage potential buyers, using a mix of professional photography, virtual staging, and AI-powered tools to showcase your property in the best possible light across all platforms. This comprehensive approach includes social media marketing, targeted advertising, and leveraging the latest real estate technology.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it typically take to sell a home in the Coachella Valley?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most properties in the Coachella Valley sell within 3-6 months, depending on market conditions, pricing strategy, location, and property condition. I work closely with you to develop a custom marketing plan that aligns with your timeline and goals. Factors like seasonality, property type, and price point also influence the timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technology and tools do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I leverage cutting-edge real estate content creation, AI tools, large language model (LLM) technology, and virtual staging to give your property maximum exposure and appeal. This modern approach includes professional photography, 3D virtual tours, AI-enhanced property descriptions, and data-driven market analysis to help homes sell faster and for top dollar.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve in the Coachella Valley?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I serve the entire Coachella Valley, including Palm Desert, Palm Springs, Rancho Mirage, La Quinta, Indian Wells, Cathedral City, Indio, Coachella, Desert Hot Springs, and surrounding areas. My deep local knowledge helps clients find the perfect property or sell their home for the best possible price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you available outside of normal business hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! I am available 24 hours a day, 7 days a week to serve your real estate needs. Whether you have a question early in the morning or late at night, I\'m here to help. Real estate doesn\'t work on a 9-to-5 schedule, and neither do I.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes you different from other real estate agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I lead with my heart, experience, and integrity – blending deep real estate expertise with genuine care for people. Clients trust me because I treat every transaction like it\'s personal and every relationship like it\'s family. My attention to detail and ability to make every interaction personal sets me apart in the Coachella Valley market.',
        },
      },
    ],
  };

  // BreadcrumbList Schema for navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://brendadevlin.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: 'https://brendadevlin.com/faq',
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <header className="header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Get answers to common questions about working with {business.name}</p>
        </div>
      </header>

      <main className="container">
        <nav style={{ margin: '1rem 0' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </nav>

        <div className="faq-container">
          <section className="section">
            <div className="faq-item">
              <h2 className="faq-question">How do you market properties?</h2>
              <p className="faq-answer">
                I share valuable content to attract and engage potential buyers, using a mix of
                professional photography, virtual staging, and AI-powered tools to showcase your
                property in the best possible light across all platforms. This comprehensive approach
                includes social media marketing, targeted advertising, and leveraging the latest real
                estate technology to reach qualified buyers wherever they are.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                How long does it typically take to sell a home in the Coachella Valley?
              </h2>
              <p className="faq-answer">
                Most properties in the Coachella Valley sell within 3-6 months, depending on market
                conditions, pricing strategy, location, and property condition. I work closely with you
                to develop a custom marketing plan that aligns with your timeline and goals. Factors
                like seasonality (with peak season during winter months), property type, and price
                point also influence the timeline.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">What technology and tools do you use?</h2>
              <p className="faq-answer">
                I leverage cutting-edge real estate content creation, AI tools, large language model
                (LLM) technology, and virtual staging to give your property maximum exposure and
                appeal. This modern approach includes professional photography, 3D virtual tours,
                AI-enhanced property descriptions, and data-driven market analysis to help homes sell
                faster and for top dollar. Technology enhances the personal touch—it never replaces it.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">What areas do you serve in the Coachella Valley?</h2>
              <p className="faq-answer">
                I serve the entire Coachella Valley, including Palm Desert, Palm Springs, Rancho
                Mirage, La Quinta, Indian Wells, Cathedral City, Indio, Coachella, Desert Hot Springs,
                and surrounding areas. My deep local knowledge of each community's unique character,
                market trends, and lifestyle amenities helps clients find the perfect property or sell
                their home for the best possible price.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">Are you available outside of normal business hours?</h2>
              <p className="faq-answer">
                Yes! I am available 24 hours a day, 7 days a week to serve your real estate needs.
                Whether you have a question early in the morning or late at night, I'm here to help.
                Real estate doesn't work on a 9-to-5 schedule, and neither do I. Your peace of mind and
                success are my top priorities, regardless of the time.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                What makes you different from other real estate agents?
              </h2>
              <p className="faq-answer">
                I lead with my heart, experience, and integrity – blending deep real estate expertise
                with genuine care for people. Clients trust me because I treat every transaction like
                it's personal and every relationship like it's family. My attention to detail and
                ability to make every interaction personal sets me apart in the Coachella Valley
                market. You're not just a client; you're part of my extended family.
              </p>
            </div>
          </section>

          <section className="section">
            <div
              className="card"
              style={{
                background: 'var(--bg-accent)',
                borderLeft: '4px solid var(--secondary)',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                Still Have Questions?
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                I'm here to help! Don't hesitate to reach out directly for personalized answers to your
                specific situation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:${business.phone.replace(/\D/g, '')}`} className="btn">
                  Call {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="btn"
                  style={{ background: 'var(--primary)' }}
                >
                  Email Me
                </a>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Learn More</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/business/${business.slug}`} className="social-link">
                Contact & Location →
              </Link>
              <Link href="/" className="social-link">
                Back to Home →
              </Link>
            </div>
          </section>
        </div>
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

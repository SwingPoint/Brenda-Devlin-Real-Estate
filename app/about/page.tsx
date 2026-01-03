import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import businessesData from '@/data/businesses.json';
import type { Metadata } from 'next';

const business = businessesData[0];

export const metadata: Metadata = {
  title: 'About Brenda Devlin - Your Trusted Coachella Valley Realtor',
  description: 'Meet Brenda Devlin, a Southern California native with 23 years of real estate experience and 800+ closed transactions. Known as "The Desert\'s Most Trusted Realtor."',
  keywords: [
    'Brenda Devlin',
    'about Brenda Devlin',
    'Coachella Valley realtor',
    'Palm Desert real estate agent',
    'trusted realtor',
  ],
  openGraph: {
    title: 'About Brenda Devlin - Your Trusted Coachella Valley Realtor',
    description: 'Meet Brenda Devlin, The Desert\'s Most Trusted Realtor',
    type: 'profile',
    locale: 'en_US',
  },
};

export default function AboutPage() {
  // Person Schema for About page
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brenda Devlin',
    jobTitle: 'Real Estate Agent',
    description: 'Southern California native with 23 years of real estate experience, specializing in Palm Desert, La Quinta, Indian Wells, and Palm Springs.',
    url: 'https://brendadevlin.com/about',
    email: business.email,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    knowsAbout: [
      'Real Estate',
      'Home Buying',
      'Home Selling',
      'Golf Course Communities',
      '55+ Communities',
      'Coachella Valley Market',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Brenda Devlin Real Estate',
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://brendadevlin.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://brendadevlin.com/about',
      },
    ],
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          style={{
            padding: '1rem 0',
            fontSize: '0.9rem',
            color: 'var(--text-light)',
          }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Home
          </Link>
          {' / '}
          <span>About</span>
        </nav>

        <main>
          <article>
            {/* Hero Section */}
            <header className="hero-section" style={{ marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Brenda Devlin</h1>
              <p className="tagline" style={{ fontSize: '1.5rem', opacity: 0.95 }}>
                The Desert's Most Trusted Realtor
              </p>
              <p style={{ fontSize: '1.125rem', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0' }}>
                DRE #01357383
              </p>
            </header>

            {/* Main Content */}
            <section className="section">
              <div className="card" style={{ marginBottom: '3rem' }}>
                <div style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    As a highly knowledgeable and resourceful Real Estate Agent, I am passionate about helping home buyers and sellers achieve their goals. With <strong>over 23 years as a realtor</strong>, I understand the industry's do's and don'ts, know how to get a deal done, and have perfected the art of connecting clients to lucrative opportunities.
                  </p>

                  <p style={{ marginBottom: '1.5rem' }}>
                    As a <strong>Southern California native and desert resident for 38 years</strong>, I completely understand the local market and specialize in serving <strong>Palm Desert, La Quinta, Indian Wells, Palm Springs</strong>, as well as the surrounding areas. Specializing in <strong>golf course and 55+ communities</strong>, I utilize my superior marketing and negotiation expertise, and I am committed to be your trusted ally to help you navigate the market, streamline the home-buying and selling process, and negotiate the best deal on your behalf.
                  </p>

                  <p style={{ marginBottom: '1.5rem' }}>
                    As a go-getter focused on results, I have <strong>closed over 800 transactions</strong> and consistently rank among the top-producing agents in the Greater Palm Springs area, establishing a stellar reputation as <strong>"The Desert's Most Trusted Realtor."</strong>
                  </p>

                  <p style={{ marginBottom: '1.5rem' }}>
                    In addition to my vast industry expertise, it is my work ethic and commitment to excellence that set me apart. By listening to my clients and understanding their needs, I ensure that their goals are met, and their expectations are exceeded. I constantly strive to provide a positive and personalized real estate experience and take pride in serving a referral-based clientele.
                  </p>

                  <p>
                    Married for 35 years and a mother of two grown men and recently a <strong>new Grandma</strong>, you can find me enjoying <strong>pickleball, scrapbooking, traveling, listening to podcasts</strong>, and spending time with friends and family. Whether you are looking to buy, relocate, or sell real estate, I am your ultimate resource to turn your dreams into reality.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfied Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Customer Support</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">800+</div>
                  <div className="stat-label">Transactions Closed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">$400M+</div>
                  <div className="stat-label">Properties Closed</div>
                </div>
              </div>

              {/* Specializations */}
              <div className="card" style={{ marginBottom: '3rem', background: 'var(--bg-accent)' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>
                  Areas of Expertise
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                      🏘️ Communities I Serve
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.0625rem', lineHeight: '2' }}>
                      <li>✓ Palm Desert</li>
                      <li>✓ La Quinta</li>
                      <li>✓ Indian Wells</li>
                      <li>✓ Palm Springs</li>
                      <li>✓ Rancho Mirage</li>
                      <li>✓ Indio</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                      🏌️ Specialty Markets
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.0625rem', lineHeight: '2' }}>
                      <li>✓ Golf Course Communities</li>
                      <li>✓ 55+ Active Adult Communities</li>
                      <li>✓ Luxury Estates</li>
                      <li>✓ Vacation Properties</li>
                      <li>✓ Investment Properties</li>
                      <li>✓ First-Time Buyers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personal Touch */}
              <div className="card">
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>
                  Beyond Real Estate
                </h2>
                <div style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                  <p style={{ marginBottom: '1rem' }}>
                    When I'm not helping clients find their dream homes, you'll find me:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-accent)', borderRadius: '20px', fontSize: '1rem' }}>
                      🎾 Playing Pickleball
                    </span>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-accent)', borderRadius: '20px', fontSize: '1rem' }}>
                      📖 Scrapbooking
                    </span>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-accent)', borderRadius: '20px', fontSize: '1rem' }}>
                      ✈️ Traveling
                    </span>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-accent)', borderRadius: '20px', fontSize: '1rem' }}>
                      🎧 Podcasts
                    </span>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-accent)', borderRadius: '20px', fontSize: '1rem' }}>
                      👨‍👩‍👦 Family Time
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ textAlign: 'center' }}>
              <div className="card" style={{ background: 'var(--gradient-desert)', color: 'white' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  Ready to Work Together?
                </h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95 }}>
                  Let's turn your real estate dreams into reality. I'm here to help you every step of the way.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={`tel:${business.phone}`}
                    className="btn"
                    style={{ background: 'white', color: 'var(--primary)' }}
                  >
                    Call: {business.phone}
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="btn"
                    style={{ background: 'white', color: 'var(--primary)' }}
                  >
                    Email Me
                  </a>
                  <Link href="/blog" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
                    Read My Blog
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}


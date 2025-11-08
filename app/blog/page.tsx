import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import blogPosts from '@/data/blog-posts.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Blog - Coachella Valley Market Insights',
  description: 'Expert real estate advice, market reports, and home buying guides for Palm Desert, Palm Springs, and Coachella Valley from 36-year veteran agent Brenda Devlin.',
  keywords: ['Coachella Valley real estate blog', 'Palm Desert market report', 'home buying guide', 'real estate tips'],
  openGraph: {
    title: 'Real Estate Blog - Coachella Valley Market Insights',
    description: 'Expert real estate advice from Brenda Devlin',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  // Blog CollectionPage Schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Brenda Devlin Real Estate Blog',
    description: 'Real estate insights, market reports, and home buying advice for the Coachella Valley',
    url: 'https://brendadevlin.com/blog',
    author: {
      '@type': 'Person',
      name: 'Brenda Devlin',
      jobTitle: 'Real Estate Agent',
      url: 'https://brendadevlin.com',
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://brendadevlin.com/blog/${post.slug}`,
      datePublished: post.publishDate,
      dateModified: post.modifiedDate,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
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
        name: 'Blog',
        item: 'https://brendadevlin.com/blog',
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <header className="header">
        <div className="container">
          <h1>Coachella Valley Real Estate Blog</h1>
          <p>Expert insights, market reports, and home buying advice</p>
        </div>
      </header>

      <main className="container">
        <nav aria-label="Breadcrumb" style={{ margin: '1rem 0' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-light)' }}>→</span>
          <span style={{ color: 'var(--text)' }}>Blog</span>
        </nav>

        <article>
          <section className="section">
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Welcome to the Brenda Devlin Real Estate Blog. Here you'll find in-depth market analysis, home buying and selling guides, and insider tips from 36 years of experience in the Coachella Valley real estate market.
            </p>

            <div style={{ display: 'grid', gap: '2rem' }}>
              {blogPosts.map((post) => (
                <div key={post.slug} className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-light)' }}>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                    </div>
                    
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--text)', marginBottom: '1.5rem' }}>
                      {post.excerpt}
                    </p>
                    
                    <Link href={`/blog/${post.slug}`} className="btn">
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="card" style={{ background: 'var(--bg-accent)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                Have Questions About the Market?
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Get personalized insights for your specific situation. I'm here to help you navigate the Coachella Valley real estate market with confidence.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/business/brenda-devlin-real-estate" className="btn">
                  Contact Me
                </Link>
                <Link href="/faq" className="btn" style={{ background: 'var(--primary)' }}>
                  View FAQ
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Brenda Devlin Real Estate. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>
          <Link href="/" style={{ color: 'var(--secondary)' }}>Home</Link>
          {' • '}
          <Link href="/blog" style={{ color: 'var(--secondary)' }}>Blog</Link>
          {' • '}
          <Link href="/faq" style={{ color: 'var(--secondary)' }}>FAQ</Link>
        </p>
      </footer>
    </>
  );
}


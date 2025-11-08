import { notFound } from 'next/navigation';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import blogPosts from '@/data/blog-posts.json';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Brenda Devlin Real Estate Blog`,
    description: post.description,
    keywords: [post.category, 'Coachella Valley', 'real estate', 'Palm Desert', 'market report'],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://brendadevlin.com${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Real Estate Agent',
      url: 'https://brendadevlin.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brenda Devlin Real Estate',
      url: 'https://brendadevlin.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://brendadevlin.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    inLanguage: 'en-US',
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://brendadevlin.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <header className="header">
        <div className="container">
          <div style={{ fontSize: '0.9375rem', marginBottom: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>
            {post.category} • {post.readTime}
          </div>
          <h1 style={{ marginBottom: '1rem' }}>{post.title}</h1>
          <div style={{ fontSize: '1rem', opacity: 0.9 }}>
            By {post.author} • Published{' '}
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>
        </div>
      </header>

      <main className="container">
        <nav aria-label="Breadcrumb" style={{ margin: '1rem 0' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-light)' }}>→</span>
          <Link href="/blog" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Blog
          </Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-light)' }}>→</span>
          <span style={{ color: 'var(--text)' }}>{post.category}</span>
        </nav>

        <article style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card" style={{ marginBottom: '2rem', background: 'var(--bg-accent)', borderLeft: '4px solid var(--primary)' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', fontStyle: 'italic' }}>
              {post.excerpt}
            </p>
          </div>

          {post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text)' }}>
                  {block.text}
                </p>
              );
            }

            if (block.type === 'heading') {
              if (block.level === 2) {
                return (
                  <h2
                    key={index}
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--primary-dark)',
                      marginTop: '2.5rem',
                      marginBottom: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {block.text}
                  </h2>
                );
              } else {
                return (
                  <h3
                    key={index}
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: 'var(--primary-dark)',
                      marginTop: '2.5rem',
                      marginBottom: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {block.text}
                  </h3>
                );
              }
            }

            if (block.type === 'list') {
              return (
                <ul key={index} style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}

          <div className="card" style={{ marginTop: '3rem', background: 'var(--bg-accent)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              Ready to Take the Next Step?
            </h2>
            <p style={{ fontSize: '1.0625rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Whether you're buying or selling in the Coachella Valley, I'm here to help you achieve your real estate goals with 36 years of local expertise.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/business/brenda-devlin-real-estate" className="btn">
                Contact Me Today
              </Link>
              <Link href="/blog" className="btn" style={{ background: 'var(--primary)' }}>
                Read More Articles
              </Link>
            </div>
          </div>
        </article>

        <section className="section" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
          <h2 className="section-title">More Real Estate Insights</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.slug} className="card">
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                    {relatedPost.category} • {relatedPost.readTime}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    <Link href={`/blog/${relatedPost.slug}`} style={{ color: 'var(--primary-dark)', textDecoration: 'none' }}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {relatedPost.excerpt.substring(0, 150)}...
                  </p>
                  <Link href={`/blog/${relatedPost.slug}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
                    Read More →
                  </Link>
                </div>
              ))}
          </div>
        </section>
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


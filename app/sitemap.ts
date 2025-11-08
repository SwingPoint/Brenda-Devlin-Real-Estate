import { MetadataRoute } from 'next';
import businessesData from '@/data/businesses.json';
import blogPosts from '@/data/blog-posts.json';

/**
 * Next.js 15.5 dynamic sitemap configuration
 * Generates sitemap.xml with all pages for search engines and AI crawlers
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brendadevlin.com';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic business pages
  const businessPages: MetadataRoute.Sitemap = businessesData.map((business) => ({
    url: `${baseUrl}/business/${business.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...businessPages, ...blogPages];
}

import { MetadataRoute } from 'next';
import businessesData from '@/data/businesses.json';

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

  return [...staticPages, ...businessPages];
}

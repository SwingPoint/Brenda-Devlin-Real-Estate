import { MetadataRoute } from 'next';

/**
 * Next.js 15.5 robots.txt configuration
 * Implements STRATEGIC APPROACH (Policy B):
 * - Allow search/citation crawlers (Googlebot, OAI-SearchBot, ChatGPT-User)
 * - Block training data crawlers (GPTBot, ClaudeBot, anthropic-ai)
 * 
 * This maximizes visibility in AI-powered search results while protecting
 * content from being used in AI model training.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://brendadevlin.com';

  return {
    rules: [
      // ========================================
      // GOOGLE/GEMINI: Dual Control
      // ========================================
      {
        userAgent: 'Googlebot',
        allow: '/',
        // Googlebot handles traditional search indexing
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
        // Block Gemini AI training while maintaining search visibility
      },

      // ========================================
      // OPENAI: Strategic Split
      // ========================================
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        // Allow ChatGPT search indexing - helps with citations
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        // Allow user-triggered requests from ChatGPT
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
        // Block training data collection
      },

      // ========================================
      // ANTHROPIC: Block Training Crawlers
      // ========================================
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
        // Block Claude training crawler
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
        // Block bulk training crawler
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
        // Block web-focused training crawler
      },

      // ========================================
      // OTHER AI CRAWLERS: Block Training
      // ========================================
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        // Allow Perplexity for real-time search citations
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
        // Block ByteDance/TikTok crawler
      },
      {
        userAgent: 'Meta-ExternalAgent',
        disallow: '/',
        // Block Meta AI training
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        // Allow Amazon for Alexa/product discovery
      },

      // ========================================
      // TRADITIONAL SEARCH ENGINES: Allow All
      // ========================================
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        // Yahoo
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
      },

      // ========================================
      // DEFAULT RULE: Allow All Others
      // ========================================
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

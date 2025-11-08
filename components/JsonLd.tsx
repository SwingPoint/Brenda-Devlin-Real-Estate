import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * Component to render JSON-LD structured data for AI crawlers
 * JSON-LD is the preferred format for Schema.org markup
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

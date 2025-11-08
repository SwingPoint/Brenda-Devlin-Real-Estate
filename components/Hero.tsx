import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, tagline, backgroundImage }: HeroProps) {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})` }
    : {};

  return (
    <section className="hero" style={bgStyle}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {tagline && <p className="hero-tagline">{tagline}</p>}
      </div>
    </section>
  );
}


import React from 'react';

interface NapBlockProps {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  phone: string;
  email?: string;
  mapLink?: string;
  hours?: string;
}

/**
 * NAP (Name, Address, Phone) block component
 * Critical for local SEO and AI crawler understanding
 * Renders semantic HTML with proper microdata
 */
export function NapBlock({
  name,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  phone,
  email,
  mapLink,
  hours,
}: NapBlockProps) {
  return (
    <div className="nap-block" itemScope itemType="https://schema.org/LocalBusiness">
      <h2 className="sr-only" itemProp="name">{name}</h2>
      
      <div className="contact-section">
        <div className="contact-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <strong>📍 Address:</strong>
          <address>
            <span itemProp="streetAddress">{streetAddress}</span><br />
            <span itemProp="addressLocality">{addressLocality}</span>,{' '}
            <span itemProp="addressRegion">{addressRegion}</span>{' '}
            <span itemProp="postalCode">{postalCode}</span>
          </address>
          {mapLink && (
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
              View on Google Maps →
            </a>
          )}
        </div>

        <div className="contact-item">
          <strong>📞 Phone:</strong>
          <a href={`tel:${phone.replace(/\D/g, '')}`} itemProp="telephone">
            {phone}
          </a>
        </div>

        {email && (
          <div className="contact-item">
            <strong>✉️ Email:</strong>
            <a href={`mailto:${email}`} itemProp="email">
              {email}
            </a>
          </div>
        )}

        {hours && (
          <div className="contact-item">
            <strong>🕒 Hours:</strong>
            <span itemProp="openingHours">{hours}</span>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function ObfuscatedEmail() {
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    // Decode the email client-side to avoid scraping
    const user = 'support';
    const domain = 'socialtide';
    const tld = 'app';
    setEmail(`${user}@${domain}.${tld}`);
  }, []);

  if (!email) {
    // Fallback for users with JavaScript disabled
    return (
      <span className="text-ocean-foam">
        support [at] socialtide [dot] app
      </span>
    );
  }

  return (
    <a 
      href={`mailto:${email}`}
      className="text-ocean-foam hover:text-ocean-foam visited:text-ocean-foam transition-colors duration-300 underline"
      onClick={(e) => {
        // Additional protection: only allow click if email is set
        if (!email) e.preventDefault();
      }}
    >
      {email}
    </a>
  );
}

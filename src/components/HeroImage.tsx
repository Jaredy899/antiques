'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroImage() {
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-logo border border-logo-200">
      {!hasError ? (
        <Image 
          src="/images/new-location.jpg" 
          alt="Abingdon Antiques and More New Location" 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-logo-100">
          <span className="text-logo-600">New Location Image</span>
        </div>
      )}
    </div>
  );
} 
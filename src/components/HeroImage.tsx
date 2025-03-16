'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroImage() {
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-logo border border-logo-200">
      {!hasError ? (
        <Image 
          src="/images/antiques/1.webp" 
          alt="Vintage antiques display" 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-logo-100">
          <span className="text-logo-600">Antique Display Image</span>
        </div>
      )}
    </div>
  );
} 
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CategoryImageProps {
  category: string;
}

export default function CategoryImage({ category }: CategoryImageProps) {
  const [hasError, setHasError] = useState(false);
  const imageUrl = `/images/main/${category.toLowerCase().replace(/\s+/g, '-')}.webp`;
  
  return (
    <div className="relative mb-4 h-40 w-full overflow-hidden rounded bg-sepia-200">
      {!hasError ? (
        <Image
          src={imageUrl}
          alt={`${category} category`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-sepia-500">{category} Image</span>
        </div>
      )}
    </div>
  );
} 
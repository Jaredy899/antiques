'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const LogoHeader = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="relative h-[150px] w-[350px] flex items-center justify-center py-4 cursor-pointer">
      {!imageError && (
        <Image
          src="/images/abingdon-antiques.webp"
          alt="Abingdon Antiques and More"
          width={320}
          height={120}
          priority
          className="h-auto object-contain"
          onError={() => setImageError(true)}
        />
      )}
      
      {imageError && (
        <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-sepia-300 bg-sepia-50 p-8 text-center">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-sepia-900">Abingdon Antiques</h1>
            <p className="text-lg text-sepia-700">and More Vendor Mall</p>
            <p className="mt-2 text-xs text-sepia-600">Replace with your logo at public/images/abingdon-antiques.webp</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LogoHeader; 
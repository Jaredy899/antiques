'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "~/utils/ThemeProvider";

const LogoHeader = () => {
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();

  return (
    <Link href="/" className="relative h-[150px] w-[350px] flex items-center justify-center py-4 cursor-pointer">
      {!imageError && (
        <div className="p-2 bg-white dark:bg-logo-900 rounded-lg shadow-logo border border-logo-100 dark:border-logo-700 transition-colors duration-200">
          <Image
            src="/images/abingdon-antiques.webp"
            alt="Abingdon Antiques and More"
            width={320}
            height={120}
            priority
            className="h-auto object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      {imageError && (
        <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-logo-300 dark:border-logo-700 bg-white dark:bg-logo-900 p-8 text-center transition-colors duration-200">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-logo-800 dark:text-logo-200">Abingdon Antiques</h1>
            <p className="text-lg text-logo-600 dark:text-logo-300">and More Vendor Mall</p>
            <p className="mt-2 text-xs text-logo-500 dark:text-logo-400">Replace with your logo at public/images/abingdon-antiques.webp</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LogoHeader; 
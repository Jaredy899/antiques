'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const LogoHeader = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="relative h-[150px] w-[350px] flex items-center justify-center py-4 cursor-pointer">
      {!imageError && (
        <div className="p-2 bg-white dark:bg-logo-dark-50 rounded-lg shadow-logo dark:shadow-dark-logo border border-logo-100 dark:border-logo-dark-200 transition-colors duration-200">
          <Image
            src="https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsGeYTWAssBA58PTHyMiku4IY7hOfazVlCRGKg"
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
        <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-logo-300 dark:border-logo-dark-300 bg-white dark:bg-logo-dark-50 p-8 text-center transition-colors duration-200">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-logo-800 dark:text-gray-100">Abingdon Antiques</h1>
            <p className="text-lg text-logo-600 dark:text-gray-100">and More Vendor Mall</p>
            <p className="mt-2 text-xs text-logo-500 dark:text-gray-100">Replace with your logo at public/images/abingdon-antiques.webp</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LogoHeader; 
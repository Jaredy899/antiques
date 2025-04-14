'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const LogoHeader = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="block w-[180px] md:w-[240px] cursor-pointer">
      {!imageError ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-logo dark:shadow-gray-800 border border-logo-100 dark:border-gray-700 transition-colors duration-200">
          <Image
            src="https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsAtOxKzb1pPWKB2MoR9DLV5lmCjvsJGYxX3nw"
            alt="Abingdon Antiques and More"
            width={240}
            height={70}
            priority
            className="w-full h-auto object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center rounded border-2 border-dashed border-logo-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-3 text-center transition-colors duration-200">
          <div>
            <h1 className="text-lg font-bold text-logo-800 dark:text-white">Abingdon Antiques</h1>
            <p className="text-sm text-logo-600 dark:text-gray-300">and More Vendor Mall</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LogoHeader; 
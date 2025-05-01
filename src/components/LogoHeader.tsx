'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoHeader = () => {
  const [imageError, setImageError] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <Link href="/" className="block cursor-pointer">
      {!imageError ? (
        <div className={`transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-md ${
          isHomePage ? 'w-[180px] md:w-[240px]' : 'w-[120px] md:w-[160px]'
        }`}>
          <Image
            src="/images/logo.jpg"
            alt="Abingdon Antiques and More"
            width={240}
            height={70}
            priority
            className="w-full h-auto object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className={`flex items-center justify-center p-3 text-center transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-md ${
          isHomePage ? 'w-[180px] md:w-[240px]' : 'w-[120px] md:w-[160px]'
        }`}>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Abingdon Antiques</h1>
            <p className="text-sm text-gray-700 dark:text-gray-300">and More Vendor Mall</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LogoHeader; 
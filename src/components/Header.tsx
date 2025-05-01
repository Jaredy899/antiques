"use client";

import Link from "next/link";
import LogoHeader from "./LogoHeader";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4">
        {/* Logo Header */}
        <div className="flex justify-center mb-3 md:mb-4">
          <LogoHeader />
        </div>

        {/* Navigation */}
        <nav className="border-t border-b border-gray-200 dark:border-gray-700 py-2 md:py-3">
          <ul className="flex justify-center space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/information" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Information
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
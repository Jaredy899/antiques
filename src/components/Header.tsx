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
    <header className="w-full bg-white dark:bg-gray-900 shadow-logo dark:shadow-gray-800 transition-colors duration-200">
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
        <nav className="border-t border-b border-logo-200 dark:border-gray-700 py-2 md:py-3">
          {/* Mobile Menu Button */}
          <div className="flex justify-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-logo-700 dark:text-gray-300 hover:text-logo-900 dark:hover:text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="block text-lg font-medium">Menu {isMobileMenuOpen ? '▲' : '▼'}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:justify-center md:space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/hours-location" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                Hours & Location
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <ul className="mt-4 flex flex-col items-center space-y-4 text-lg font-medium md:hidden">
              <li>
                <Link href="/" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hours-location" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-logo-600 dark:text-gray-300 hover:text-logo-800 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 
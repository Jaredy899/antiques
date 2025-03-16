"use client";

import Link from "next/link";
import LogoHeader from "./LogoHeader";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { isBrowser } from "~/utils/browserChecks";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-logo-950 shadow-logo transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Logo Header */}
        <div className="flex justify-center mb-6">
          <LogoHeader />
        </div>

        {/* Navigation */}
        <nav className="border-t border-b border-logo-200 dark:border-logo-800 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-logo-700 dark:text-logo-300 hover:text-logo-900 dark:hover:text-logo-100 focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="block text-lg font-medium">Menu {isMobileMenuOpen ? '▲' : '▼'}</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:justify-center md:space-x-8 text-lg font-medium">
              <li>
                <Link href="/" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/antiques" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Antiques
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/hours-location" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <ul className="mt-4 flex flex-col items-center space-y-4 text-lg font-medium md:hidden">
              <li>
                <Link href="/" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/antiques" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Antiques
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/hours-location" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-logo-600 dark:text-logo-300 hover:text-logo-800 dark:hover:text-logo-100 transition-colors">
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
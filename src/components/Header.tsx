"use client";

import Link from "next/link";
import LogoHeader from "./LogoHeader";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Logo Header */}
        <div className="flex justify-center mb-6">
          <LogoHeader />
        </div>

        {/* Navigation */}
        <nav className="border-t border-b border-sepia-300 py-4">
          {/* Mobile Menu Button */}
          <div className="flex justify-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-sepia-800 hover:text-antique-dark focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="block text-lg font-medium">Menu {isMobileMenuOpen ? '▲' : '▼'}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:justify-center md:space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-antique-dark transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/antiques" className="hover:text-antique-dark transition-colors">
                Antiques
              </Link>
            </li>
            <li>
              <Link href="/vendors" className="hover:text-antique-dark transition-colors">
                Vendors
              </Link>
            </li>
            <li>
              <Link href="/hours-location" className="hover:text-antique-dark transition-colors">
                Hours & Location
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-antique-dark transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <ul className="mt-4 flex flex-col items-center space-y-4 text-lg font-medium md:hidden">
              <li>
                <Link href="/" className="hover:text-antique-dark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/antiques" className="hover:text-antique-dark transition-colors">
                  Antiques
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="hover:text-antique-dark transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/hours-location" className="hover:text-antique-dark transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-antique-dark transition-colors">
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
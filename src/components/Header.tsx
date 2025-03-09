import Link from "next/link";
import LogoHeader from "./LogoHeader";

const Header = () => {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Logo Header */}
        <div className="flex justify-center mb-6">
          <LogoHeader />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center border-t border-b border-sepia-300 py-4">
          <ul className="flex space-x-8 text-lg font-medium">
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
        </nav>
      </div>
    </header>
  );
};

export default Header; 
import Link from "next/link";
import AddressLink from "./AddressLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sepia-300 bg-sepia-100 py-8 text-sepia-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-sepia-900">Contact Us</h3>
            <p className="mb-2">Phone: <a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            <p className="mb-2">Email: <a href="mailto:info@abingdonantiquesandmore.com" className="hover:underline">info@abingdonantiquesandmore.com</a></p>
            <p>
              <AddressLink address="961 West Main Street, Abingdon, VA 24210">
                961 West Main Street, Abingdon, VA 24210
              </AddressLink>
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-medium text-sepia-900">Follow Us:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61551934216826" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-antique-dark hover:text-sepia-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/abingdonantiques?igsh=ajl1MXg1bmdubGpm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-antique-dark hover:text-sepia-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-sepia-900">Quick Links</h3>
            <ul className="space-y-2">
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
                <Link href="/hours-location" className="hover:text-antique-dark transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/vendor-login" className="hover:text-antique-dark transition-colors">
                  Vendor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-sepia-900">Hours</h3>
            <p className="mb-2">Monday - Saturday: 10:00 AM - 6:00 PM</p>
            <p className="mb-2">Sunday: 1:00 PM - 4:00 PM</p>
            <p className="italic">Closed on major holidays</p>
          </div>
        </div>

        <div className="mt-8 border-t border-sepia-200 pt-6 text-center">
          <p>
            &copy; {currentYear} Abingdon Antiques and More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
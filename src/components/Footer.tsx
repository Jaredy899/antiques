import Link from "next/link";
import AddressLink from "./AddressLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-logo-200 dark:border-gray-700 bg-logo-50 dark:bg-gray-800 py-8 text-logo-700 dark:text-gray-300 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-logo-800 dark:text-white">Contact Us</h3>
            <p className="mb-2">Phone: <a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            <p className="mb-2">Email: <a href="mailto:abingdonantiquesandmore@gmail.com" className="hover:underline">abingdonantiquesandmore@gmail.com</a></p>
            <div className="mb-4">
              <h3 className="mb-2 font-semibold text-logo-800 dark:text-white">Addresses:</h3>
              <div className="space-y-2 text-logo-700 dark:text-gray-300">
                <div>
                  <p className="font-medium">Original Location:</p>
                  <AddressLink address="961 West Main Street, Abingdon, VA 24210">
                    961 West Main Street, Abingdon, VA 24210
                  </AddressLink>
                </div>
                <div>
                  <p className="font-medium">New Location:</p>
                  <AddressLink address="227 West Main Street, Abingdon, VA 24210">
                    227 West Main Street, Abingdon, VA 24210
                  </AddressLink>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 font-medium text-logo-800 dark:text-white">Follow Us:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61551934216826" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-logo-600 dark:text-gray-400 hover:text-logo-800 dark:hover:text-white transition-colors"
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
                  className="text-logo-600 dark:text-gray-400 hover:text-logo-800 dark:hover:text-white transition-colors"
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
                <a 
                  href="http://www.youtube.com/@AbingdonAntiques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-logo-600 dark:text-gray-400 hover:text-logo-800 dark:hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@abingdonantiques?_t=ZP-8ugMjrT3mKk&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-logo-600 dark:text-gray-400 hover:text-logo-800 dark:hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-logo-800 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/hours-location" className="block hover:underline">
                Hours & Location
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-logo-800 dark:text-white">Hours</h3>
            <p className="mb-2">Monday - Saturday: 10:00 AM - 6:00 PM</p>
            <p className="mb-2">Sunday: 1:00 PM - 4:00 PM</p>
            <p className="italic">Closed on major holidays</p>
          </div>
        </div>

        <div className="mt-8 border-t border-logo-200 dark:border-gray-700 pt-6 text-center">
          <p>&copy; {currentYear} Abingdon Antiques and More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
'use client';

import Link from "next/link";
import Image from "next/image";
import CategoryImage from "~/components/CategoryImage";
import HeroImage from "~/components/HeroImage";
import AddressLink from "~/components/AddressLink";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 rounded-lg bg-sepia-100 bg-opacity-70 p-8 shadow-md">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-sepia-900 md:text-5xl text-center font-serif">
              Welcome to Abingdon Antiques and More
            </h1>
            <p className="mb-6 text-lg text-sepia-800 text-center">
              Discover unique treasures from the past at Abingdon Antiques and More Vendor Mall. 
              We offer a wide selection of quality antiques, collectibles, and vintage items.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/antiques" 
                className="rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800 focus:ring-2 focus:ring-sepia-300"
              >
                Browse Antiques
              </Link>
              <Link 
                href="/hours-location" 
                className="rounded-md border border-antique-dark bg-transparent px-5 py-2.5 text-sepia-900 shadow-sm transition-all hover:bg-sepia-100 focus:ring-2 focus:ring-sepia-300"
              >
                Visit Us
              </Link>
            </div>
            <div className="mt-4 text-center">
              <span className="font-medium text-sepia-800">Follow us:</span>
              <p className="text-sepia-700 text-sm mt-1 mb-2">Stay connected for the latest treasures and antique finds!</p>
              <div className="mt-2 flex space-x-4 justify-center">
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
                <a 
                  href="http://www.youtube.com/@AbingdonAntiques" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-antique-dark hover:text-sepia-700 transition-colors"
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
                  className="text-antique-dark hover:text-sepia-700 transition-colors"
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
          <div className="rounded-lg bg-white p-2 shadow-md">
            {/* Antique image */}
            <HeroImage />
          </div>
        </div>
      </section>

      {/* New Location Announcement */}
      <section className="mb-16 rounded-lg bg-sepia-200 p-8 shadow-md border-2 border-antique-dark">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-sepia-900 font-serif">
              Exciting News!
            </h2>
            <p className="mb-6 text-lg text-sepia-800">
              <span className="font-semibold">Our new location will be opening soon at:</span><br />
              <AddressLink address="227 W Main St, Abingdon, VA 24210">
                227 W Main St, Abingdon, VA 24210
              </AddressLink>
            </p>
            <p className="text-sepia-800">
              We&apos;re expanding to serve you better! Stay tuned for our grand opening announcement.
            </p>
          </div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <Image 
              src="/images/new-location.jpg" 
              alt="Our new location at 227 W Main St" 
              className="rounded object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-sepia-900 font-serif">Featured Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Furniture", "Jewelry", "Art", "Collectibles", "China & Glassware", "Home Decor"].map((category) => (
            <div key={category} className="rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg">
              <CategoryImage category={category} />
              <h3 className="mb-2 text-xl font-semibold text-sepia-900 font-serif">{category}</h3>
              <p className="text-sepia-700">
                We offer a variety of quality {category.toLowerCase()} pieces from various eras and styles.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/antiques"
            className="inline-block rounded-md bg-antique-dark px-6 py-3 text-white shadow-sm transition-all hover:bg-sepia-800 focus:ring-2 focus:ring-sepia-300"
          >
            View All Antiques
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="mb-16 rounded-lg bg-sepia-100 p-8 shadow-md">
        <h2 className="mb-6 text-center text-3xl font-bold text-sepia-900 font-serif">About Abingdon Antiques and More</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sepia-800 text-center">
              Abingdon Antiques and More Vendor Mall has been serving collectors and enthusiasts for over 20 years. 
              Our vendor mall hosts dozens of skilled dealers, each bringing their unique expertise and inventory.
            </p>
            <p className="mb-4 text-sepia-800 text-center">
              Whether you&apos;re looking for fine furniture, vintage clothing, rare collectibles, or unique home decor, 
              you&apos;ll find something special at Abingdon Antiques and More.
            </p>
            <p className="text-sepia-800 text-center">
              Visit us today and discover why we&apos;re the region&apos;s premier destination for antiques and collectibles.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-semibold text-sepia-900 font-serif">Quality Selection</h3>
              <p className="text-sepia-700">Curated antiques and collectibles from reputable vendors.</p>
            </div>
            <div className="rounded bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-semibold text-sepia-900 font-serif">Expert Knowledge</h3>
              <p className="text-sepia-700">Our vendors bring decades of expertise in their specialties.</p>
            </div>
            <div className="rounded bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-semibold text-sepia-900 font-serif">New Inventory Weekly</h3>
              <p className="text-sepia-700">Fresh items added regularly for returning customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg bg-antique-dark p-8 text-center text-white shadow-md">
        <h2 className="mb-4 text-3xl font-bold font-serif">Visit Us Today</h2>
        <p className="mb-6 mx-auto max-w-2xl text-lg">
          Come explore our 15,000 square foot vendor mall filled with antiques, collectibles, and unique treasures.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link 
            href="/hours-location" 
            className="inline-block rounded-md bg-white px-6 py-3 font-medium text-sepia-900 shadow-sm transition-all hover:bg-sepia-50"
          >
            Get Directions
          </Link>
          <p className="text-sepia-100 text-sm mt-3 mb-2">Follow our social media for the latest on new antiques that have come in — you never know what treasures await!</p>
          <div className="mt-2 flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61551934216826" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-sepia-100 transition-colors"
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
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/abingdonantiques?igsh=ajl1MXg1bmdubGpm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-sepia-100 transition-colors"
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
              <span>Instagram</span>
            </a>
            <a 
              href="http://www.youtube.com/@AbingdonAntiques" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-sepia-100 transition-colors"
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
              <span>YouTube</span>
            </a>
            <a 
              href="https://www.tiktok.com/@abingdonantiques?_t=ZP-8ugMjrT3mKk&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-sepia-100 transition-colors"
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
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

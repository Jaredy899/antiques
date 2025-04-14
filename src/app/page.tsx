'use client';

import Link from "next/link";
import AddressLink from "~/components/AddressLink";
import OptimizedImage from "~/components/OptimizedImage";
import ImageGallery from "~/components/ImageGallery";

export default function HomePage() {
  // Hardcoded image URLs
  const galleryImages = [
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsZkQKnRtPE1NxDIg9rh86Bi4RfTSylb3eKdGm",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsy80sfRDG1JbILFWOoMAgx7P49VvUj5rZXtNe",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsApRfExb1pPWKB2MoR9DLV5lmCjvsJGYxX3nw",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsqeVP8aAo2pXgV7HBurPdSzmyUO5CK9f0lx1s",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFse4NPZbYKjfQh6uHwcvo0mnFrP8DByULaObG4",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFssWQENxRiwGqRQXjaOTYzH816lIkchyoC9txN",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsED72c492bga4hAVdszcfGZt3vDSkFJe8rKwR",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsd1SLKG2VFBmf9HhQVLJpzkqGNjtM6ZlxcgPW",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFs9bWwcqG8Hgw3jA5IqYdvuJ9CRS7lKfZzEa1L",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full mb-16">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <OptimizedImage
          src="https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFs7JnlQPMWntGHVqNQ4dFc7j52XlJrsP8Obg0x"
          alt="Abingdon Antiques and More Store Front"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            {/* <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 tracking-wide">Abingdon Antiques and More</h1>
            <p className="font-playfair text-xl md:text-2xl italic tracking-wide">Discover Unique Treasures</p> */}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-16 rounded-lg bg-logo-100 dark:bg-logo-dark-100 p-8 text-center shadow-logo dark:shadow-dark-logo transition-colors duration-200">
        <h2 className="mb-4 text-2xl font-bold text-logo-800 dark:text-gray-100">Stay Connected!</h2>
        <p className="mb-6 text-logo-700 dark:text-gray-100">
          Follow us on social media for the latest updates, new arrivals, pictures, and videos!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61551934216826" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-5 py-2.5 text-white shadow-sm transition-all hover:bg-[#166FE5] focus:ring-2 focus:ring-[#1877F2]/50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
          <a 
            href="https://www.instagram.com/abingdonantiques/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#E4405F] px-5 py-2.5 text-white shadow-sm transition-all hover:bg-[#D63256] focus:ring-2 focus:ring-[#E4405F]/50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </section>

      {/* New Location Announcement */}
      <section className="mb-16 rounded-lg bg-logo-200 dark:bg-logo-dark-100 p-8 shadow-logo dark:shadow-dark-logo border-2 border-logo-600 dark:border-logo-dark-300 transition-colors duration-200">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-logo-800 dark:text-white font-serif">
              Our New Home!
            </h2>
            <p className="mb-6 text-lg text-logo-700 dark:text-gray-200">
              <span className="font-semibold">We are now exclusively located at:</span><br />
              <AddressLink address="227 W Main St, Abingdon, VA 24210">
                227 W Main St, Abingdon, VA 24210
              </AddressLink>
            </p>
            <p className="text-logo-700 dark:text-gray-200">
              We have successfully completed our move to our new location! Come visit us at our beautiful new space in the heart of downtown Abingdon.
            </p>
          </div>
          <div className="rounded-lg bg-white dark:bg-logo-dark-50 p-2 shadow-md">
            <OptimizedImage 
              src="https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsWShw4AnAoZYFIrpQJyB8wcDh0eKmCV6iTnMg" 
              alt="Our new location at 227 W Main St" 
              className="rounded object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="mb-16 rounded-lg bg-white dark:bg-logo-dark-100 p-8 shadow-logo dark:shadow-dark-logo transition-colors duration-200">
        <h2 className="mb-6 text-center text-3xl font-bold text-logo-800 dark:text-gray-100 font-serif">About Abingdon Antiques and More</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-logo-700 dark:text-gray-100 text-center">
              Abingdon Antiques and More Vendor Mall brings together a community of experienced dealers, 
              each bringing their unique expertise and carefully curated inventory.
            </p>
            <p className="mb-4 text-logo-700 dark:text-gray-100 text-center">
              Whether you&apos;re looking for fine furniture, vintage clothing, rare collectibles, or unique home decor, 
              you&apos;ll find something special at Abingdon Antiques and More.
            </p>
            <p className="text-logo-700 dark:text-gray-100 text-center">
              Visit us today and discover why we&apos;re becoming the region&apos;s premier destination for antiques and collectibles.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded bg-logo-50 dark:bg-logo-dark-50 p-4 shadow-sm transition-colors duration-200">
              <h3 className="mb-2 font-semibold text-logo-800 dark:text-gray-100 font-serif">Quality Selection</h3>
              <p className="text-logo-700 dark:text-gray-100">Curated antiques and collectibles from reputable vendors.</p>
            </div>
            <div className="rounded bg-logo-50 dark:bg-logo-dark-50 p-4 shadow-sm transition-colors duration-200">
              <h3 className="mb-2 font-semibold text-logo-800 dark:text-gray-100 font-serif">Expert Knowledge</h3>
              <p className="text-logo-700 dark:text-gray-100">Our vendors bring decades of expertise in their specialties.</p>
            </div>
            <div className="rounded bg-logo-50 dark:bg-logo-dark-50 p-4 shadow-sm transition-colors duration-200">
              <h3 className="mb-2 font-semibold text-logo-800 dark:text-gray-100 font-serif">New Inventory Weekly</h3>
              <p className="text-logo-700 dark:text-gray-100">Fresh items added regularly for returning customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ImageGallery 
            images={galleryImages} 
            title="Featured Items" 
            columns={3} 
            aspectRatio="square" 
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg bg-logo-100 dark:bg-logo-dark-100 p-8 text-center shadow-logo dark:shadow-dark-logo transition-colors duration-200">
        <h2 className="mb-4 text-3xl font-bold text-logo-800 dark:text-gray-100">
          Ready to Discover Unique Treasures?
        </h2>
        <p className="mb-6 text-lg text-logo-700 dark:text-gray-100">
          Visit Abingdon Antiques and More today to find one-of-a-kind items with history and character.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/hours-location" 
            className="rounded-md bg-logo-600 px-5 py-2.5 text-white shadow-sm transition-all hover:bg-logo-700 focus:ring-2 focus:ring-logo-300"
          >
            Get Directions
          </Link>
          <Link 
            href="/contact" 
            className="rounded-md border border-logo-600 dark:border-logo-dark-300 bg-transparent px-5 py-2.5 text-logo-700 dark:text-gray-100 shadow-sm transition-all hover:bg-logo-50 dark:hover:bg-logo-dark-50 focus:ring-2 focus:ring-logo-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

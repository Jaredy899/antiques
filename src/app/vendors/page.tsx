'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define response type
type VendorsResponse = {
  vendors: Vendor[];
};

// Define vendor type
type Vendor = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  boothNumber: string;
  boothImage?: string;
};

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBooth, setSelectedBooth] = useState<string | null>(null);

  // Fetch vendors data from API
  useEffect(() => {
    async function fetchVendors() {
      try {
        const response = await fetch('/api/vendors');
        const data = await response.json() as VendorsResponse;
        setVendors(data.vendors || []);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchVendors();
  }, []);

  // Close lightbox when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedBooth(null);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-sepia-300 border-t-sepia-800"></div>
        </div>
      </div>
    );
  }

  // Filter vendors with booth images
  const vendorsWithBoothImages = vendors.filter(vendor => vendor.boothImage);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-sepia-900">Our Vendors</h1>
      
      {/* Vendor Login Banner */}
      <div className="mb-12 rounded-lg bg-antique-dark p-6 text-center text-white shadow-md">
        <h2 className="mb-3 text-2xl font-bold">Vendor Portal</h2>
        <p className="mb-4">Current vendors can access their accounts through Quail HQ to manage inventory, track sales, and update settings.</p>
        <a 
          href="https://vendor.quailhq.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-white px-6 py-3 font-medium text-sepia-900 shadow-sm transition-all hover:bg-sepia-50"
        >
          Access Vendor Portal
        </a>
      </div>
      
      <p className="mb-12 mx-auto max-w-3xl text-center text-lg text-sepia-800">
        Abingdon Antiques and More Vendor Mall hosts over 50 quality vendors specializing in various 
        antiques, collectibles, and vintage items. Each vendor brings their unique expertise and inventory 
        to create a diverse shopping experience.
      </p>
      
      {/* Booth Image Gallery */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-sepia-900">Vendor Booth Gallery</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vendorsWithBoothImages.map((vendor, index) => (
            <div 
              key={vendor.id} 
              className="group aspect-square overflow-hidden rounded-lg bg-sepia-100 cursor-pointer"
              onClick={() => setSelectedBooth(vendor.boothImage ?? null)}
            >
              <Image
                src={vendor.boothImage ?? ''}
                alt={`Vendor booth ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>

        {vendorsWithBoothImages.length === 0 && (
          <p className="text-center text-sepia-700">
            No booth images available yet. Check back soon!
          </p>
        )}
      </section>
      
      {/* Become a Vendor */}
      <section className="rounded-lg bg-sepia-100 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Become a Vendor</h2>
            <p className="mb-4 text-sepia-800">
              Join our community of antique and collectible dealers at Abingdon Antiques and More Vendor Mall.
              We offer flexible booth spaces and competitive commission rates in a high-traffic location.
            </p>
            <p className="mb-4 text-sepia-800">
              As a vendor, you&apos;ll benefit from:
            </p>
            <ul className="mb-6 list-disc pl-5 text-sepia-800">
              <li>Prime location in historic Abingdon</li>
              <li>Professional sales staff</li>
              <li>Secure, climate-controlled environment</li>
              <li>Marketing and promotion</li>
              <li>Flexible terms and booth sizes</li>
            </ul>
            <a 
              href="/contact" 
              className="inline-block rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800"
            >
              Inquire About Spaces
            </a>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Vendor Information</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sepia-900">Available Booth Sizes:</h4>
                <ul className="list-disc pl-5 text-sepia-800">
                  <li>Small: 6&apos; x 8&apos; ($175/month)</li>
                  <li>Medium: 8&apos; x 10&apos; ($250/month)</li>
                  <li>Large: 10&apos; x 12&apos; ($325/month)</li>
                  <li>Premium: 12&apos; x 15&apos; ($450/month)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sepia-900">Commission Rate:</h4>
                <p className="text-sepia-800">10% sales commission on all items sold</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sepia-900">Requirements:</h4>
                <ul className="list-disc pl-5 text-sepia-800">
                  <li>Quality antiques, collectibles, or vintage items</li>
                  <li>Professional display</li>
                  <li>Minimum 3-month rental agreement</li>
                  <li>Regular inventory rotation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vendor Testimonials */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-sepia-900">What Our Vendors Say</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <blockquote className="border-l-4 border-antique-dark pl-4">
              <p className="italic text-sepia-800">
                &quot;I&apos;ve been a vendor at Abingdon Antiques for five years now. The location is excellent, 
                the staff is professional, and my sales have been consistently strong.&quot;
              </p>
            </blockquote>
            <p className="mt-4 font-medium text-sepia-900">— Mary Johnson, Heritage Silver</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <blockquote className="border-l-4 border-antique-dark pl-4">
              <p className="italic text-sepia-800">
                &quot;As a new dealer, I was nervous about starting out, but the team at Abingdon Antiques 
                was incredibly supportive. The mall gets great foot traffic and my booth has been profitable 
                from the first month.&quot;
              </p>
            </blockquote>
            <p className="mt-4 font-medium text-sepia-900">— Robert Williams, Time Capsule Collectibles</p>
          </div>
        </div>
      </section>

      {/* Lightbox for booth images */}
      {selectedBooth && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBooth(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image 
              src={selectedBooth} 
              alt="Enlarged booth view" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
              width={1200}
              height={800}
            />
            <button 
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBooth(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 
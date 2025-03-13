'use client';

import { useState, useEffect } from 'react';
import { UploadDropzone } from '@uploadthing/react';
import { useUser, SignIn, useClerk } from "@clerk/nextjs";
import type { OurFileRouter } from '../api/uploadthing/core';
import Link from 'next/link';
import Image from 'next/image';

// Define response types
type ImagesResponse = {
  images: string[];
};

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

export default function AdminPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const { isSignedIn, user, isLoaded } = useUser();
  const clerk = useClerk();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('images');
  const [isSaving, setIsSaving] = useState(false);

  // Load images from API
  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch('/api/images');
        const data = await response.json() as ImagesResponse;
        setUploadedImages(data.images || []);
      } catch (error) {
        console.error('Error loading images:', error);
        setUploadedImages([]);
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoaded) {
      void loadImages();
    }
  }, [isLoaded]);

  // Load vendors from API
  useEffect(() => {
    async function loadVendors() {
      try {
        const response = await fetch('/api/vendors');
        const data = await response.json() as VendorsResponse;
        setVendors(data.vendors || []);
      } catch (error) {
        console.error('Error loading vendors:', error);
      }
    }

    if (isLoaded && isSignedIn) {
      void loadVendors();
    }
  }, [isLoaded, isSignedIn]);

  // Save images to API whenever they change
  useEffect(() => {
    async function saveImages() {
      try {
        await fetch('/api/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ images: uploadedImages }),
        });
      } catch (error) {
        console.error('Error saving images:', error);
      }
    }

    if (isLoaded && !isLoading && isSignedIn) {
      void saveImages();
    }
  }, [uploadedImages, isLoaded, isLoading, isSignedIn]);

  // Update vendor booth image
  const updateVendorBoothImage = async (vendorId: number, imageUrl: string) => {
    if (!isSignedIn) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vendorId, boothImage: imageUrl }),
      });
      
      const data = await response.json() as { success: boolean; vendor?: Vendor };
      
      if (data.success) {
        // Update local vendors state
        setVendors(vendors.map(vendor => 
          vendor.id === vendorId 
            ? { ...vendor, boothImage: imageUrl } 
            : vendor
        ));
      }
    } catch (error) {
      console.error('Error updating vendor booth image:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-sepia-300 border-t-sepia-800"></div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl font-bold text-sepia-900">Admin Access Required</h1>
          <SignIn redirectUrl="/admin" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-sepia-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          {user && (
            <div className="flex items-center">
              <span className="text-sm text-sepia-600 mr-2">
                Welcome, {user.firstName ?? user.emailAddresses[0]?.emailAddress}
              </span>
            </div>
          )}
          <Link 
            href="/antiques" 
            className="text-sm text-sepia-600 hover:text-sepia-800"
          >
            View Public Gallery →
          </Link>
        </div>
      </div>

      {/* Admin Navigation */}
      <div className="mb-8 border-b">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('images')}
            className={`pb-4 px-2 ${activeTab === 'images' 
              ? 'border-b-2 border-sepia-800 font-medium text-sepia-900' 
              : 'text-sepia-600 hover:text-sepia-800'}`}
          >
            Antiques
          </button>
          <button
            onClick={() => setActiveTab('vendors')}
            className={`pb-4 px-2 ${activeTab === 'vendors' 
              ? 'border-b-2 border-sepia-800 font-medium text-sepia-900' 
              : 'text-sepia-600 hover:text-sepia-800'}`}
          >
            Vendor Booths
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-4 px-2 ${activeTab === 'analytics' 
              ? 'border-b-2 border-sepia-800 font-medium text-sepia-900' 
              : 'text-sepia-600 hover:text-sepia-800'}`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Antiques Images Tab */}
      {activeTab === 'images' && (
        <div>
          {/* Image Gallery with Delete Option */}
          <h2 className="text-xl font-semibold mb-4">Manage Antiques Images</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-sepia-100">
                <Image
                  src={imageUrl}
                  alt={`Antique item ${index + 1}`}
                  className="h-full w-full object-cover"
                  width={400}
                  height={400}
                />
                <button
                  onClick={() => {
                    const newImages = uploadedImages.filter((_, i) => i !== index);
                    setUploadedImages(newImages);
                  }}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {uploadedImages.length === 0 && (
            <p className="text-center text-sepia-700 mb-8">
              No antiques images uploaded yet. Use the upload area below to add some images.
            </p>
          )}

          {/* Upload Section - Moved to bottom and made smaller */}
          <div className="mt-8 border-t pt-8">
            <div className="max-w-md mx-auto">
              <UploadDropzone<OurFileRouter, "imageUploader">
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res) {
                    const newImages = res.map((file) => file.url);
                    setUploadedImages((prev) => [...prev, ...newImages]);
                  }
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
                config={{ mode: "auto" }}
                appearance={{
                  button: {
                    backgroundColor: "#78716c",
                    color: "white",
                    padding: "4px 8px",
                    fontSize: "14px",
                    borderRadius: "4px"
                  },
                  container: "w-full",
                  allowedContent: "hidden",
                  uploadIcon: "hidden"
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Vendor Booth Management Tab */}
      {activeTab === 'vendors' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Manage Booth Images</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {vendors.filter(vendor => vendor.boothImage).map((vendor) => (
              <div key={vendor.id} className="group relative aspect-square overflow-hidden rounded-lg bg-sepia-100">
                <Image
                  src={vendor.boothImage ?? ''}
                  alt={`Booth image ${vendor.id}`}
                  className="h-full w-full object-cover"
                  width={400}
                  height={400}
                />
                <button
                  onClick={() => {
                    void updateVendorBoothImage(vendor.id, "");
                  }}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
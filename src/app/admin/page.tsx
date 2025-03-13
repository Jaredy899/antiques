'use client';

import { useState, useEffect } from 'react';
import { UploadDropzone } from '@uploadthing/react';
import { useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import type { OurFileRouter } from '../api/uploadthing/core';
import Link from 'next/link';

export default function AdminPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { isSignedIn, user, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('images');

  // Load images from API
  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();
        setUploadedImages(data.images);
      } catch (error) {
        console.error('Error loading images:', error);
        setUploadedImages([]);
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoaded) {
      loadImages();
    }
  }, [isLoaded]);

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
      saveImages();
    }
  }, [uploadedImages, isLoaded, isLoading, isSignedIn]);

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
          <SignIn />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-sepia-900">Admin Dashboard</h1>
        <Link 
          href="/antiques" 
          className="text-sm text-sepia-600 hover:text-sepia-800"
        >
          View Public Gallery →
        </Link>
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
            Image Management
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-4 px-2 ${activeTab === 'settings' 
              ? 'border-b-2 border-sepia-800 font-medium text-sepia-900' 
              : 'text-sepia-600 hover:text-sepia-800'}`}
          >
            Site Settings
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

      {/* Image Management Tab */}
      {activeTab === 'images' && (
        <div>
          {/* Image Gallery with Delete Option */}
          <h2 className="text-xl font-semibold mb-4">Manage Images</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-sepia-100">
                <img
                  src={imageUrl}
                  alt={`Uploaded image ${index + 1}`}
                  className="h-full w-full object-cover"
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
              No images uploaded yet. Use the upload button below to add some images.
            </p>
          )}

          {/* Upload Section - Moved to bottom but with original aesthetic */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-sepia-700 mb-2">Add New Images</h3>
            <div className="max-w-xl rounded-lg border-2 border-dashed border-sepia-300 p-4">
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
              />
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Site Settings</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="Abingdon Antiques"
              />
              <p className="mt-1 text-sm text-gray-500">
                This appears in the browser tab and search results.
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
                defaultValue="Abingdon Antiques and More Vendor Mall - Quality antiques and collectibles"
              />
              <p className="mt-1 text-sm text-gray-500">
                This appears in search results and social media shares.
              </p>
            </div>
            
            <div className="flex justify-end">
              <button className="bg-sepia-700 text-white px-4 py-2 rounded-md hover:bg-sepia-600">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-sepia-50 p-4 rounded-lg border border-sepia-200">
                <h3 className="text-sm font-medium text-sepia-600">Total Visitors</h3>
                <p className="text-2xl font-bold text-sepia-900">1,234</p>
                <p className="text-xs text-sepia-500">+12% from last month</p>
              </div>
              
              <div className="bg-sepia-50 p-4 rounded-lg border border-sepia-200">
                <h3 className="text-sm font-medium text-sepia-600">Page Views</h3>
                <p className="text-2xl font-bold text-sepia-900">5,678</p>
                <p className="text-xs text-sepia-500">+8% from last month</p>
              </div>
              
              <div className="bg-sepia-50 p-4 rounded-lg border border-sepia-200">
                <h3 className="text-sm font-medium text-sepia-600">Avg. Time on Site</h3>
                <p className="text-2xl font-bold text-sepia-900">2:45</p>
                <p className="text-xs text-sepia-500">+5% from last month</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-sepia-600 mb-2">Traffic Sources</h3>
              <div className="h-40 bg-sepia-50 rounded-lg border border-sepia-200 flex items-center justify-center">
                <p className="text-sepia-400">Analytics chart would appear here</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-sepia-600 mb-2">Popular Pages</h3>
              <div className="bg-sepia-50 rounded-lg border border-sepia-200">
                <div className="p-3 border-b border-sepia-200 flex justify-between">
                  <span className="text-sm text-sepia-700">/antiques</span>
                  <span className="text-sm font-medium text-sepia-900">3,456 views</span>
                </div>
                <div className="p-3 border-b border-sepia-200 flex justify-between">
                  <span className="text-sm text-sepia-700">/</span>
                  <span className="text-sm font-medium text-sepia-900">1,234 views</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-sm text-sepia-700">/contact</span>
                  <span className="text-sm font-medium text-sepia-900">567 views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';

export default function AntiquesPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

    loadImages();
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-sepia-900">Image Gallery</h1>
      </div>

      {/* Image Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uploadedImages.map((imageUrl, index) => (
          <div key={index} className="group aspect-square overflow-hidden rounded-lg bg-sepia-100">
            <img
              src={imageUrl}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {uploadedImages.length === 0 && (
        <p className="text-center text-sepia-700">
          No images available.
        </p>
      )}
    </div>
  );
} 
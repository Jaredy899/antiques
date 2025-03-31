'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagesFromFolder } from '~/utils/images';

export default function AntiquesPage() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Load images from public folder
  useEffect(() => {
    async function loadImages() {
      try {
        const images = await getImagesFromFolder('antiques');
        setImages(images);
      } catch (error) {
        console.error('Error loading images:', error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    }

    void loadImages();
  }, []);

  // Close lightbox when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
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
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-logo-300 border-t-logo-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-logo-800">Antique Gallery</h1>
      </div>

      {/* Image Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((imageUrl, index) => (
          <div 
            key={index} 
            className="group aspect-square overflow-hidden rounded-lg bg-logo-50 cursor-pointer shadow-logo"
            onClick={() => setSelectedImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={`Antique image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p className="text-center text-logo-600">
          No images available.
        </p>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
              width={1200}
              height={800}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-logo-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 
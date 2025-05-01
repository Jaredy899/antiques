import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

type ImageGalleryProps = {
  images: string[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'video' | 'auto';
  titleClassName?: string;
};

export default function ImageGallery({ 
  images, 
  title, 
  columns = 3,
  aspectRatio = 'square',
  titleClassName = ''
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const aspectRatioClass = {
    'square': 'aspect-square',
    'video': 'aspect-video',
    'auto': 'aspect-auto'
  };

  return (
    <section className="py-8">
      {title && (
        <h2 className={`text-3xl font-bold text-center mb-8 ${titleClassName}`}>{title}</h2>
      )}
      
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${aspectRatioClass[aspectRatio]} cursor-pointer group`}
            onClick={() => setSelectedImage(image)}
          >
            <OptimizedImage
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <div className="relative aspect-square">
              <OptimizedImage
                src={selectedImage}
                alt="Selected item"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 
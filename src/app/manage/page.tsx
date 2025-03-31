'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ImageFile = {
  name: string;
  url: string;
  size: number;
  dimensions?: { width: number; height: number };
};

export default function FileManagerPage() {
  const [currentFolder, setCurrentFolder] = useState<'antiques' | 'vendors'>('antiques');
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const router = useRouter();

  // Load images for current folder
  useEffect(() => {
    loadImages();
  }, [currentFolder]);

  const loadImages = async () => {
    try {
      const response = await fetch(`/api/manage/images?folder=${currentFolder}`);
      if (response.ok) {
        const data = await response.json();
        setImages(data.images);
      } else if (response.status === 401) {
        router.push('/manage/auth');
      }
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    await uploadFiles(Array.from(files));
  };

  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (!files?.length) return;

    await uploadFiles(Array.from(files));
  };

  const uploadFiles = async (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (!imageFiles.length) {
      alert('Please select only image files.');
      return;
    }

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      if (!file) continue;

      setUploadProgress(Math.round((i / imageFiles.length) * 100));
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', currentFolder);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert(`Failed to upload ${file.name}`);
      }
    }

    setUploadProgress(null);
    loadImages();
  };

  const handleDelete = async (imageName: string) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch('/api/manage/images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          folder: currentFolder,
          filename: imageName,
        }),
      });

      if (response.ok) {
        loadImages();
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  const handleLogout = () => {
    // Delete the auth cookie
    document.cookie = 'file_manager_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to login page
    window.location.href = '/manage/auth';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">File Manager</h1>
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="space-x-4">
            <button
              onClick={() => setCurrentFolder('antiques')}
              className={`rounded-md px-4 py-2 ${
                currentFolder === 'antiques'
                  ? 'bg-logo-600 text-white'
                  : 'bg-white text-logo-600 border border-logo-600'
              }`}
            >
              Antiques
            </button>
            <button
              onClick={() => setCurrentFolder('vendors')}
              className={`rounded-md px-4 py-2 ${
                currentFolder === 'vendors'
                  ? 'bg-logo-600 text-white'
                  : 'bg-white text-logo-600 border border-logo-600'
              }`}
            >
              Vendors
            </button>
          </div>
        </div>

        {/* Upload Area */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mb-8 rounded-lg border-2 border-dashed border-logo-300 bg-logo-50 p-8 text-center"
        >
          <input
            type="file"
            id="fileInput"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="block cursor-pointer text-logo-600"
          >
            <div className="mb-2">
              Drag and drop images here or click to select files
            </div>
            {uploadProgress !== null && (
              <div className="mt-2">
                Uploading: {uploadProgress}%
              </div>
            )}
          </label>
        </div>

        {/* Image Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-logo-300 border-t-logo-600"></div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <div
                key={image.name}
                className="group relative rounded-lg bg-white p-2 shadow-md"
              >
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={image.url}
                    alt={image.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-logo-600 truncate">
                    {image.name}
                  </span>
                  <button
                    onClick={() => handleDelete(image.name)}
                    className="rounded bg-red-100 p-1 text-red-600 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
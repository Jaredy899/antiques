'use client';

import { useState } from 'react';
import { UploadButton } from '@uploadthing/react';
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import type { OurFileRouter } from '../api/uploadthing/core';

export default function AntiquesPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { isSignedIn, user } = useUser();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-sepia-900">Image Gallery</h1>
        <div>
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="rounded-md bg-sepia-800 px-4 py-2 text-white hover:bg-sepia-700">
                Sign In
              </button>
            </SignInButton>
          ) : (
            <div className="flex items-center gap-4">
              <span>Welcome, {user.firstName}!</span>
              <SignOutButton>
                <button className="rounded-md bg-sepia-800 px-4 py-2 text-white hover:bg-sepia-700">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="mx-auto max-w-xl">
          {isSignedIn ? (
            <UploadButton<OurFileRouter, "imageUploader">
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                if (res) {
                  const newImages = res.map((file) => file.url);
                  setUploadedImages((prev) => [...prev, ...newImages]);
                  alert("Upload Completed");
                }
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          ) : (
            <p className="text-center text-sepia-700">
              Please sign in to upload images.
            </p>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uploadedImages.map((imageUrl, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg bg-sepia-100">
            <img
              src={imageUrl}
              alt={`Uploaded image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {uploadedImages.length === 0 && (
        <p className="text-center text-sepia-700">
          No images uploaded yet. {!isSignedIn && "Sign in to"} Use the upload button above to add some images!
        </p>
      )}
    </div>
  );
} 
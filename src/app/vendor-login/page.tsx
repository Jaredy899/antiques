'use client';

import { useEffect } from "react";

export default function VendorLoginPage() {
  useEffect(() => {
    // Redirect to Quail HQ for vendor management
    window.location.href = "https://vendor.quailhq.com";
  }, []);

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-sepia-900">Vendor Portal</h1>
        <p className="text-sepia-800 mb-4">
          Redirecting you to our vendor management system...
        </p>
        <div className="flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-antique-dark border-t-transparent"></div>
        </div>
        <p className="mt-4 text-center text-sm text-sepia-600">
          If you are not redirected automatically, please{" "}
          <a 
            href="https://vendor.quailhq.com" 
            className="text-antique-dark hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
} 
'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VendorLoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // In a real app, this would be an API call to authenticate the vendor
    // For demo purposes, we'll simulate a successful login with specific credentials
    if (credentials.email === "vendor@example.com" && credentials.password === "password") {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store vendor login state (in a real app, this would be a proper auth token)
      localStorage.setItem("vendorLoggedIn", "true");
      localStorage.setItem("vendorEmail", credentials.email);
      localStorage.setItem("vendorName", "Sample Vendor");
      localStorage.setItem("vendorBoothNumber", "A12");
      
      // Redirect to vendor dashboard
      router.push("/vendor-portal");
    } else {
      setError("Invalid email or password. For demo purposes, use vendor@example.com / password");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-sepia-900">Vendor Login</h1>
      
      <div className="rounded-lg bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="mb-1 block font-medium text-sepia-900">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="mb-1 block font-medium text-sepia-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
              required
            />
          </div>
          
          {error && (
            <div className="rounded-md bg-red-50 p-4 text-red-800">
              <p>{error}</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <Link href="#" className="text-sm text-antique-dark hover:underline">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800 focus:ring-2 focus:ring-sepia-300 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
        
        <div className="mt-6 border-t border-sepia-100 pt-6 text-center">
          <p className="text-sm text-sepia-700">
            Don't have a vendor account?{" "}
            <Link href="/contact" className="text-antique-dark hover:underline">
              Contact us to become a vendor
            </Link>
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-sepia-600">
            For demo purposes, use:<br />
            Email: vendor@example.com<br />
            Password: password
          </p>
        </div>
      </div>
    </div>
  );
} 
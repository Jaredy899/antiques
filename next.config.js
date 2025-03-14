/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

// Configuration for Next.js
const config = {
  // Enable standalone output for production deployment
  // Commented out for local development on Windows to avoid symlink issues
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**',
      },
    ],
  },
  // Skip type checking during production build for faster builds
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Skip ESLint during production build for faster builds
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable static generation for pages that require authentication
  experimental: {
    // This will disable static generation for pages that require authentication
    // which helps with the Clerk authentication issues during build
    workerThreads: false,
    cpus: 1
  },
};

export default config;

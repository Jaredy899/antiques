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
};

export default config;

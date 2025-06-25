/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// Configuration for Next.js
const config = {
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
  // Configure static file handling
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xfcpn2nyfb.ufs.sh',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'lyiiw7a2jaaujwge.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow cross-origin requests during development
  allowedDevOrigins: ['10.24.24.6', '100.86.190.124']
};

export default config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled to allow API routes and dynamic features
  // distDir: 'dist', // Reverted to default .next for standard build
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

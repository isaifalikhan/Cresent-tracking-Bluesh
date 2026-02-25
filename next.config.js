/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Ensure GSAP and other client-only libs work
  transpilePackages: [],
};

module.exports = nextConfig;

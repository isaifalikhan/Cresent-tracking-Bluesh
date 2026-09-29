/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Ensure GSAP and other client-only libs work
  transpilePackages: [],
  // Keep private app areas (admin, customer dashboard, login, demo tracking) out of search results.
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return ["/admin/:path*", "/dashboard/:path*", "/login", "/tracking/:path*"].map((source) => ({
      source,
      headers: noindex,
    }));
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["store-lcikq8re.saleor.cloud"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
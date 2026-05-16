import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.lynkid.my.id" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.unsplash.com" },
    ],
  },
};

export default nextConfig;

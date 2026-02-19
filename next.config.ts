import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local public images (logo, uploaded avatars, etc.)
    localPatterns: [
      { pathname: '/**' },
    ],
  },
};

export default nextConfig;

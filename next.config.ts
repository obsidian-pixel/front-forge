import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/obsidian-pixel/front-forge/blob/main/public/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio_2026",
  assetPrefix: "/Portfolio_2026/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  output: 'export',
  images: { unoptimized: true },
  /* config options here */
};

export default nextConfig;

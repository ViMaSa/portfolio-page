import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: '/cfs26', destination: '/facts', permanent: false }];
  },
};

export default nextConfig;

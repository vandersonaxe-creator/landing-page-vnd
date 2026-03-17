import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rtlxptnormal.easybuilder.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

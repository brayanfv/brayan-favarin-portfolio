import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projetos/professional-management-api",
        destination: "/projetos/professional-management-system",
        statusCode: 301,
      },
      {
        source: "/en/projects/professional-management-api",
        destination: "/en/projects/professional-management-system",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

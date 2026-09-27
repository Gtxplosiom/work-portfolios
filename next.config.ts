import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/work-portfolios",
  assetPrefix: "/work-portfolios",
};

export default nextConfig;

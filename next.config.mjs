/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/veterinarioSite" : "",
  basePath: process.env.NODE_ENV === "production" ? "/veterinarioSite" : "",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/veterinarioSite" : "",
  basePath: process.env.NODE_ENV === "production" ? "/veterinarioSite" : "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;

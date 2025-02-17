import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["api.themoviedb.org", "image.tmdb.org"],
  },
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/portfolio when building for GitHub Pages;
// leave unset for local dev, Vercel, or a custom domain at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: { unoptimized: true },
};

export default nextConfig;

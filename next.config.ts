import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain static files — no Next.js server.
  output: "export",
  // Emit `about/index.html` so `/about/` resolves without a server rewrite.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

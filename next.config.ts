import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain static files — no Next.js server.
  output: "export",
  // Emit `about/index.html` so `/about/` resolves without a server rewrite.
  trailingSlash: true,
  images: { unoptimized: true },
  // Two root layouts (ru, en) — the 404 page needs its own document.
  experimental: { globalNotFound: true },
};

export default nextConfig;

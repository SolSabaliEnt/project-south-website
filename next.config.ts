import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
        },
      }
    : {}),
};

export default nextConfig;

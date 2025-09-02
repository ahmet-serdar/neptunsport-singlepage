import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error Next.js types henüz bu alanı bilmiyor
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

export default nextConfig;

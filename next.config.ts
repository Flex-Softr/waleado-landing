import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    // Old pages that were merged into others keep their search ranking via permanent redirects.
    return [{ source: "/solutions", destination: "/#use-cases", permanent: true }];
  },
};

export default nextConfig;

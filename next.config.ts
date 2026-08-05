import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WiFi IP (en0) — not bridge0 (192.168.2.1), which phones can't reach
  allowedDevOrigins: ["192.168.100.247"],
  async redirects() {
    return [
      {
        source: "/success-stories",
        destination: "/#success-stories",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

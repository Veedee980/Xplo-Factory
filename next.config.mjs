/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The original Framer site had a typo in this URL; keep old links working.
      {
        source: "/services/ersonalized-lunchbox-sets",
        destination: "/services/personalized-lunchbox-sets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

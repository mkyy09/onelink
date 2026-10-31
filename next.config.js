/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [{ source: "/share", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;

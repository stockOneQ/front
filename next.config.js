/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
};
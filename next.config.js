/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // swcPlugins: [
    //   ["@swc-jotai/debug-label", {}],
    //   ["@swc-jotai/react-refresh", {}]
    // ]
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;

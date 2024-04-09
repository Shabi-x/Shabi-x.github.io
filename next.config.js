/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  images: {
    loader: "default", // 使用默认加载器
    path: "/_next/image", // 或者根据您的实际部署环境设置合适的路径
  },
  trailingSlash: true,
};
module.exports = nextConfig;

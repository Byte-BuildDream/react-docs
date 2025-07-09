import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
   typescript: {
    // !! 警告 !!
    // 即使你的项目有类型错误，此项设置也会危险地允许生产构建成功完成。
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);

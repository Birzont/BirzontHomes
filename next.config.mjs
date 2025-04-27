/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 여기가 추가된 부분
  basePath: '/birzontHomes',
  assetPrefix: '/birzontHomes/',
  trailingSlash: true,
}

export default nextConfig

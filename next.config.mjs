/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 반드시 export
  basePath: '/BirzontHomes',   // 너의 Github 레포 이름
  assetPrefix: '/BirzontHomes/',

  images: {
    unoptimized: true,     // Next.js의 Image 최적화 끄기
  },

  trailingSlash: true,     // 모든 경로 끝에 슬래시 붙이기 (Github Pages 호환)

  experimental: {
    appDir: true,          // v0.dev로 만든 프로젝트면 이거 켜야함
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

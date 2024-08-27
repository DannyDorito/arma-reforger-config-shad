import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: true,
    cssChunking: 'loose',
  },
  output: 'export',
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
}

export default nextConfig

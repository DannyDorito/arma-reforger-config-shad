/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true,
    cssChunking: 'loose',
  },
  output: 'export',
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
}

export default nextConfig

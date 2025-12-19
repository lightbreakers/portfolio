/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Tells the app all assets live under /biz
  basePath: '/portfolio',
  // Recommended to avoid issues with double slashes
  trailingSlash: true,
}

export default nextConfig

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
  async rewrites() {
    return [
      {
        // Matches the exact path /portfolio
        source: '/biztool',
        destination: 'https://biztool-app-lightbreakers-projects.vercel.app/biztool/',
      },
      {
        // Matches everything after /biztool/ (e.g. /biztool/about)
        source: '/biztool/:path*',
        destination: 'https://biztool-app-lightbreakers-projects.vercel.app/biztool/:path*',
      },
      {
        source: '/biztool/images/:path*', 
        destination: 'https://biztool-app-lightbreakers-projects.vercel.app/biztool/images/:path*',
      },
    ];
  },
  // // Tells the app all assets live under /biz
  // basePath: '/portfolio',
  // // Recommended to avoid issues with double slashes
  // trailingSlash: true,
}

export default nextConfig

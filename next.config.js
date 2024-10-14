/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-reballing-games.s3.amazonaws.com',
        pathname: '**/*',
      },
    ],
  },
}

module.exports = nextConfig

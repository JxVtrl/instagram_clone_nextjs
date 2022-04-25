/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    unsplashApi: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  },
  images: {
    domains: [
      'unsplash.com',
      'images.unsplash.com',
      'www.freeiconspng.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
}

module.exports = nextConfig

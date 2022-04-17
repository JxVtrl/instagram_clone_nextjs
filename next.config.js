/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    unsplashApi: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  },
}

module.exports = nextConfig

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
    ]
  }
}

module.exports = nextConfig

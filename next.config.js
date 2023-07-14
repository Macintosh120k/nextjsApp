/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['dev3api.bsite.net','maclaptop.pe','www.maclaptop.pe']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

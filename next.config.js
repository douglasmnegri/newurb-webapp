/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use these settings for production (GitHub Pages)
  ...(isProd && {
    output: 'export',
    basePath: '/newurb-webapp',
    assetPrefix: '/newurb-webapp/',
  }),
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;
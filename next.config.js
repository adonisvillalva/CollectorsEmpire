/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions:{
    incluidePath: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig

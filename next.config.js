/** @type {import('next').NextConfig} */
const nextConfig = {
  // allows to pass serverasync functions to client components with the "use server" directive inside them
  images: {
    remotePatterns:
      [{
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }],
  },
};

module.exports = nextConfig;
